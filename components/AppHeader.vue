<template>
  <div>
    <SfHeader
      data-cy="svsf-appHeader-header"
      class="sf-header--has-mobile-search"
      :is-nav-visible="false"
    >
      <!-- TODO: add mobile view buttons after SFUI team PR -->
      <template #logo>
        <nuxt-link
          data-cy="svsf-appHeader-logo-link"
          :to="localePath('/')"
          class="sf-header__logo"
        >
          <SfImage
            data-cy="svsf-appHeader-logo-image"
            src="/icons/logo.svg"
            alt="Spryker Shop"
            class="sf-header__logo-image"
          />
        </nuxt-link>
      </template>
      <template #aside>
        <LocaleSelector
          data-cy="svsf-appHeader-localeSelector"
          class="smartphone-only"
        />
      </template>
      <template #header-icons>
        <div class="sf-header__icons">
          <SfButton
            data-cy="svsf-appHeader-account-button"
            class="sf-button--pure sf-header__action"
            @click="handleAccountClick"
          >
            <div class="icon-row">
              <SfIcon
                data-cy="svsf-appHeader-account-icon"
                :icon="userIcon.path"
                :class="userIcon.class"
                :viewBox="userIcon.viewBox"
              />
              <SfIcon :icon="arrowIcon.path" :class="arrowIcon.class" :viewBox="arrowIcon.viewBox"/>
            </div>
            {{ accountName }}
          </SfButton>
          <SfButton class="sf-button--pure sf-header__action">
          <div class="icon-row">
            <SfIcon :icon="quickOrderIcon.path"
            :class="quickOrderIcon.class" :viewBox="quickOrderIcon.viewBox"/>
          </div>
          Quick Order
          </SfButton>
          <SfButton
            data-cy="svsf-appHeader-wishlist-button"
            class="sf-button--pure sf-header__action"
            @click="toggleWishlistSidebar"
          >
            <div class="icon-row">
              <SfIcon
                data-cy="svsf-appHeader-wishlist-icon"
                :class="shoppingListIcon.class"
                :icon="shoppingListIcon.path"
                :viewBox="shoppingListIcon.viewBox"
              />
              <SfBadge
                data-cy="svsf-appHeader-cart-badge"
                class="sf-badge--number"
                v-if="wishlistTotalItems"
                >{{ wishlistTotalItems }}</SfBadge
              >
            </div>
            Shopping List
          </SfButton>
          <SfButton
            data-cy="svsf-appHeader-cart-button"
            class="sf-button--pure sf-header__action"
            @click="toggleCartSidebar"
          >
            <div class="icon-row">
              <SfIcon
                data-cy="svsf-appHeader-cart-icon"
                :class="cartIcon.class"
                :icon="cartIcon.path"
                :viewBox="cartIcon.viewBox"
              />
              <SfBadge
                data-cy="svsf-appHeader-cart-badge"
                v-if="cartTotalItems"
                class="sf-badge--number cart-badge"
                >{{ cartTotalItems }}</SfBadge
              >
            </div>
            My Cart
          </SfButton>
        </div>
      </template>
      <template #search>
        <div class="sf-search-bar searchbar">
          <input
            data-cy="svsf-appHeader-searchCompletion-input"
            class="sf-search-bar__input searchbar_hint"
            readonly="readonly"
            :value="searchCompletion === term ? '' : searchCompletion"
          />
          <input
            data-cy="svsf-appHeader-search-input"
            class="sf-search-bar__input searchbar_input"
            type="search"
            placeholder="Search"
            v-model="term"
            @keyup.enter="changeSearchTerm($event.target.value), clearTerm()"
            @keydown.tab.prevent="term = searchCompletion || term"
            @keyup.esc="clearTerm"
            @blur="clearTerm"
          />
          <SfIcon :icon="searchIcon.path" class="search-icon" size="20px"/>
          <div
            data-cy="svsf-appHeader-productsPopUp"
            v-if="getAbstractProducts(suggestions).length > 0"
            class="searchbar_suggestions"
            @mouseenter="blurLock = true"
            @mouseleave="blurLock = false"
          >
            <div
              :data-cy="`svsf-appHeader-products-${getAbstractProductSku(
                product,
              )}`"
              class="searchbar_suggestions-product"
              v-for="product in getAbstractProducts(suggestions)"
              :key="getAbstractProductSku(product)"
              @click="goto(getAbstractProductUrl(product))"
            >
              <div class="searchbar_suggestions-product-image">
                <img :src="getAbstractProductSmallImage(product)" />
              </div>
              <div class="searchbar_suggestions-product-info">
                <p class="searchbar_suggestions-product-title">
                  {{ getAbstractProductName(product) }}
                </p>
                <p class="searchbar_suggestions-product-price">
                  {{
                    productGetters.getFormattedPrice(
                      getAbstractProductPrice(product),
                    )
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SfHeader>

    <SfHeaderNavigation
      data-cy="svsf-appHeader-navigation"
      :is-visible-on-mobile="false"
      @close="isVisible = false"
    >
      <SfHeaderNavigationItem
        data-cy="svsf-appHeader-navigation-all-products"
        label="All products"
        class="button"
        @mouseenter="currentMenu = `products`"
        @mouseleave="currentMenu = ''"
        @click="currentMenu = `products`"
      >
        <SfMegaMenu
          data-cy="svsf-appHeader-menu"
          class="app-header-menu"
          v-if="categories.length"
          :is-absolute="true"
          :visible="currentMenu === `products`"
          title="All products"
          @close="currentMenu = ''"
        >
          <SfList data-cy="svsf-appHeader-category-list" class="categories">
            <SfListItem :data-cy="`svsf-appHeader-category-list-${index}`"
              v-for="(category, index) in categories"
              :key="index"
              @mouseenter.native="currentCategory = category.label"
              @click.native="currentCategory = category.label"
              :class="[{selected: currentCategory === category.label}]"
              >
                <SfImage src="/nav-icon.png" alt="category icon" width="32" height="32"/>
                {{ category.label }}
            </SfListItem>
          </SfList>

          <SfList :data-cy="`svsf-appHeader-subcategory-list-${index}`"
            v-for="(category, index) in categories"
            :key="index"
            class="subcategory"
            :class="[{hidden: currentCategory !== category.label}]"
            >
            <SfListItem
              :data-cy="`svsf-appHeader-subcategory-${childIndex}`"
              v-for="(subcategory, childIndex) in category.items"
              :key="childIndex"
            >
              <SfLink
                :data-cy="`svsf-appHeader-subcategory-${childIndex}-link`"
                :link="localePath(subcategory.url)"
              >
                {{ subcategory.label }}
              </SfLink>
            </SfListItem>
            <SfListItem>
              <SfLink
                :link="localePath(category.url)"
              >
                View all
              </SfLink>
            </SfListItem>
          </SfList>
        </SfMegaMenu>
      </SfHeaderNavigationItem>
      <SfHeaderNavigationItem
        data-cy="svsf-appHeader-navigation-all-products"
        label="Top sellers"
      ></SfHeaderNavigationItem>
      <SfHeaderNavigationItem
        data-cy="svsf-appHeader-navigation-all-products"
        label="Product bundles"
      ></SfHeaderNavigationItem>
      <SfHeaderNavigationItem
        data-cy="svsf-appHeader-navigation-all-products"
        label="Product sets"
      ></SfHeaderNavigationItem>
      <SfHeaderNavigationItem
        data-cy="svsf-appHeader-navigation-all-products"
        label="Configurable bundle"
      ></SfHeaderNavigationItem>
      <SfHeaderNavigationItem
        data-cy="svsf-appHeader-navigation-all-products"
        label="Brands"
      ></SfHeaderNavigationItem>
    </SfHeaderNavigation>

    <SfOverlay :visible="currentMenu !== ''"></SfOverlay>

    <!-- TODO: delete when SfHeaderNavigation mobile menu will be fixed -->
    <SfMegaMenu
      data-cy="svsf-appHeader-mobileMenuPopUp"
      class="mobile-menu"
      :visible="isMobileMenuOpen"
      @close="toggleMobileMenu"
    >
      <SfMegaMenuColumn
        :data-cy="`svsf-appHeader-category-${category.label}`"
        v-for="(category, index) in categories"
        :key="index"
        :title="category.label"
      >
        <SfList>
          <SfListItem
            :data-cy="`svsf-appHeader-subcategory-${childIndex}`"
            v-for="(subcategory, childIndex) in category.items"
            :key="childIndex"
          >
            <SfMenuItem
              :data-cy="`svsf-appHeader-subcategory-${childIndex}-link`"
              :label="subcategory.label"
              :link="subcategory.url"
              @click.native="closeMobileMenu"
            />
          </SfListItem>
        </SfList>
      </SfMegaMenuColumn>
    </SfMegaMenu>
  </div>
</template>

<script>
import {
  SfHeader,
  SfImage,
  SfIcon,
  SfButton,
  SfBadge,
  SfSearchBar,
  SfOverlay,
  SfMegaMenu,
  SfList,
  SfMenuItem,
  SfLink
} from '@storefront-ui/vue';
import {
  useCart,
  useWishlist,
  useUser,
  cartGetters,
  useCategory,
  wishlistGetters,
  productGetters,
} from '@spryker-vsf/composables';
import {
  useCatalogSearchSuggestions,
  catalogSearchSuggestionsGetters as suggestionsGetters,
} from '@spryker-vsf/catalog-search-suggestions';
import { computed, onMounted, ref, watch } from '@vue/composition-api';
import { onSSR } from '@vue-storefront/core';
import { useUiHelpers, useUiState } from '~/composables';
import LocaleSelector from './LocaleSelector';
import SearchResults from '~/components/SearchResults';
import { quickOrderIcon, shoppingListIcon, cartIcon, userIcon, searchIcon, arrowIcon } from '~/assets/icons';

export default {
  components: {
    SfHeader,
    SfImage,
    LocaleSelector,
    SfIcon,
    SfButton,
    SfBadge,
    SfSearchBar,
    SearchResults,
    SfOverlay,
    SfMegaMenu,
    SfLink,
    SfList,
    SfMenuItem,
  },
  setup(_, { root: { $router } }) {
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleModal,
      closeMobileMenu,
      isMobileMenuOpen,
      toggleMobileMenu,
    } = useUiState();
    const { changeSearchTerm, getFacetsFromURL } = useUiHelpers();
    const { isAuthenticated, load: loadUser, user } = useUser();
    const { cart, load: loadCart } = useCart();
    const { load: loadWishlist, wishlist } = useWishlist();
    const { categories, search: searchCategories } = useCategory(
      'category-tree',
    );
    const term = ref(getFacetsFromURL().term);
    const blurLock = ref(false);
    const {
      suggestions,
      search: searchSuggestions,
      loading: suggestionsLoading,
    } = useCatalogSearchSuggestions();

    const searchCompletion = computed(function () {
      return suggestionsLoading.value
        ? ''
        : suggestionsGetters.getCompletion(suggestions.value, term.value);
    });

    const wishlistTotalItems = computed(() => {
        const count = wishlistGetters.getItems(wishlist.value);
        return count ? count.toString() : null;
    });
    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      return count ? count.toString() : null;
    });

    const accountIcon = computed(() =>
      isAuthenticated.value ? 'profile_fill' : 'profile',
    );

    const accountName = computed(() => {
      return isAuthenticated.value ? `${user.value.attributes.firstName} ${user.value.attributes.lastName}` : 'not logged in';
    });

    // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4927
    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        return $router.push('/my-account');
      }

      toggleModal();
    };

    onSSR(async () => {
      await loadUser();
      await loadCart();
      await loadWishlist();
      await searchCategories();
    });

    onMounted(async () => {
      await searchCategories();
    });

    function clearTerm() {
      !blurLock.value && (term.value = '');
    }

    function goto(path) {
      blurLock.value = false;
      clearTerm();
      $router.push(path);
    }

    watch(term, () => {
      searchSuggestions(term.value);
    });

    watch(isMobileMenuOpen, () => {
      const overflow = isMobileMenuOpen.value ? 'hidden' : '';
      Object.assign(document.documentElement.style, { overflow });
    });

    return {
      isAuthenticated,
      accountIcon,
      accountName,
      cartTotalItems,
      wishlistTotalItems,
      handleAccountClick,
      toggleCartSidebar,
      toggleWishlistSidebar,
      changeSearchTerm,
      categories,
      term,
      currentMenu: '',
      currentCategory: '',
      isVisible: false,
      clearTerm,
      suggestions,
      productGetters,
      searchCompletion,
      blurLock,
      goto,
      ...suggestionsGetters,
      isMobileMenuOpen,
      closeMobileMenu,
      toggleMobileMenu,
      quickOrderIcon,
      shoppingListIcon,
      cartIcon,
      userIcon,
      searchIcon,
      arrowIcon
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~@storefront-ui/vue/styles';

.sf-header {
  position: relative;
  --header-padding: var(--spacer-sm);
  @include for-desktop {
    --header-padding: 0;
  }
  &__logo-image {
    height: var(--header-logo-height);
    min-width: 11.5rem;
  }

  &__navigation {
    --header-navigation-margin: 0 auto 0 58px;
  }

  &__action {
    --button-text-transform: uppercase;
    flex-direction: column;
    --button-font-size: 10px;
    margin-left: 30px;

    .icon-row {
      display: flex;
      align-items: center;
      gap: 7px;
      height: 36px;
    }
  }

  &__icons {
    .sf-badge--number {
      --badge-background: var(--_c-green-primary);
      --badge-border-radius: 2px;
      --badge-font-size: 11px;
      --badge-min-height: 16px;
      --badge-min-width: 16px;
      --badge-height: 16px;
      padding: 0;
      line-height: normal;
    }

    .sf-button--pure {
      --button-color: var(--header-icon-color);
      --icon-color: var(--header-icon-color);
    }
  }
}

.sf-mega-menu {
  --shadow: 0 -2px 7px rgba(0, 0, 0, 0.1);
  --mega-menu-content-padding: 0;
  min-width: 720px;
  width: auto;
  box-shadow: var(--shadow);
}

.sf-header-navigation {
  position: relative;
  background-color: var(--c-white);
}

.sf-header-navigation-item {
  --header-navigation-item-position: relative;
  --header-navigation-item-padding: 0;
  --header-navigation-item-display: block;
  --header-navigation-item-font-size: 16px;
  --header-navigation-item-color: #8F8F8F;
  --header-navigation-item-border: none;
  --header-navigation-item-flex: none;
  --gray: #E3E3E3;
  --font-size--base: 15px;

  padding: 25px 0;
  display: block;

  &.button {
    padding: 15px 0;
    --header-navigation-item-color: var(--c-black);

    &:hover {
      --c-primary: var(--c-black);
    }
  }

  .sf-mega-menu {
    z-index: 3;

    .hidden {
      display: none;
    }
  }

  .categories {
    --list-item-padding: 5px 16px 5px 5px;
    width: 360px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      line-height: var(--font-size--base);
    }
  }

  .subcategory {
    --list-item-padding: 6px 20px;
    flex: 1;
    align-self: normal;
    border-left: 1px solid var(--gray);
    box-shadow: var(--shadow);
  }

  .sf-list__item {
    --list-item-color: #4C4C4C;
    --link-color: var(--list-item-color);
    --link-text-decoration: none;
    &:hover, &.selected, a:hover {
      --list-item-color: var(--c-black);
      background-color: #F0F0F0;
    }
  }
}

.nav-item {
  --header-navigation-item-margin: 0 var(--spacer-base);
}

.sf-search-bar {
  --search-bar-width: 100%;
  padding-inline-start: 56px;
  flex: 1;
  display: flex;
  height: 2rem;
  align-items: center;

  .searchbar_input {
    width: 100%;
    height: 100%;
  }
}

.searchbar {
  position: relative;
  &_input {
    z-index: 1;
    background-color: var(--c-white);
    padding: 26px 16px 26px 56px;
    border: none;
    border-radius: 2px;
  }
  &_hint {
    position: absolute;
    border-color: transparent;
    color: var(--_c-gray-accent-darken);
    z-index: 1;
  }
  &_suggestions {
    width: 320px;
    max-height: 50vh;
    box-sizing: border-box;
    position: absolute;
    background-color: white;
    right: 0;
    padding: 30px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
    top: 50px;
    overflow: auto;
    z-index: 2;

    &-product {
      display: flex;
      align-items: center;
      padding-bottom: 30px;
      cursor: pointer;

      &:hover &-title,
      &:hover &-price {
        color: var(--_c-green-primary);
      }

      &-info {
        padding-left: 30px;
      }

      &-title,
      &-price {
        margin: 0;
      }

      &-price {
        color: var(--_c-gray-primary-lighten);
      }

      &-image {
        height: 50px;

        & > img {
          object-fit: contain;
          width: 50px;
          height: 100%;
        }
      }
    }
  }
}

.search-icon {
  position: absolute;
  z-index: 3;
  left: 20px;
  --icon-color: var(--header-icon-color);
}

.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  overflow: auto;
  height: 100%;

  .nuxt-link-active {
    font-weight: bold;
  }
}
</style>
