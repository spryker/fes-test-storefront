<template>
  <div id="category">
    <SfNotification
      data-cy="svsf-categorySection-error-message"
      :visible="!!cartErrorMessage"
      :message="cartErrorMessage"
      type="danger"
      class="message"
      @click:close="cartErrorMessage = null"
    >
      <template #icon>
        <SfIcon
          data-cy="svsf-categorySection-error-icon"
          icon="error"
          color="white"
        />
      </template>
    </SfNotification>
    <div class="category__heading section">
      <SfBreadcrumbs
        data-cy="svsf-categorySection-breadcrumbs"
        class="breadcrumbs desktop-only"
        :breadcrumbs="breadcrumbs"
      />
      <h1 class="category__title">{{ currentCategory.text }}</h1>
    </div>
    <LayoutSlot :slotName="slotName" />
    <div class="navbar section">
      <!--      <div class="navbar__aside desktop-only">
        <SfHeading
          data-cy="svsf-categorySection-categories-heading"
          :level="3"
          :title="$t('Categories')"
          class="navbar__title"
        />
      </div>-->
      <div class="navbar__main">
        <div class="navbar__filters">
          <SfButton
            data-cy="svsf-categorySection-filters-button"
            class="sf-button--text navbar__filters-button"
            aria-label="Filters"
            @click="toggleFilterSidebar"
          >
            {{ $t('Filters') }}
            <SfIcon
              data-cy="svsf-categorySection-filter-icon"
              size="18px"
              color="dark-secondary"
              icon="filter"
              class="navbar__filters-icon"
            />
          </SfButton>
        </div>
        <div class="navbar__counter">
          <span class="navbar__label desktop-only"
            >{{ $t('Products found') }}:
          </span>
          <span class="desktop-only">
            {{ pagination.totalItems }}
          </span>
          <span class="navbar__label smartphone-only">
            {{ pagination.totalItems }} {{ $t('Items') }}
          </span>
        </div>
        <div class="navbar__sort desktop-only">
          <span class="navbar__label">{{ $t('Sort by') }}:</span>
          <SfSelect
            data-cy="svsf-categorySection-sortBy-select"
            class="navbar__select"
            :value="sortBy.selected"
            placeholder="select sorting"
            @input="th.changeSorting"
          >
            <SfSelectOption
              :data-cy="``"
              v-for="option in sortBy.options"
              :key="option.id"
              :value="option.id"
              :selected="option.id === sortBy.selected"
              class="sort-by__option"
              >{{ option.value }}</SfSelectOption
            >
          </SfSelect>
        </div>
        <div class="navbar__view">
          <span class="navbar__view-label desktop-only">{{ $t('View') }}</span>
          <span
            class="navbar__view-icon"
            role="button"
            aria-label="Change to grid view"
            :class="{ active: isCategoryGridView }"
            @click="toggleCategoryGridView"
          >
            <SfIcon
              data-cy="svsf-categorySection-tiles-icon"
              icon="tiles"
              size="16px"
              :aria-pressed="isCategoryGridView"
            />
          </span>
          <span
            class="navbar__view-icon"
            :class="{ active: !isCategoryGridView }"
            @click="toggleCategoryGridView"
            role="button"
            aria-label="Change to list view"
          >
            <SfIcon
              data-cy="svsf-categorySection-list-icon"
              icon="list"
              size="16px"
              :aria-pressed="!isCategoryGridView"
            />
          </span>
        </div>
      </div>
    </div>

    <div class="main section">
      <div class="sidebar desktop-only">
        <SfLoader :class="{ loading }" :loading="loading">
          <SfAccordion
            data-cy="svsf-categorySection-categoryTree-accordion"
            class="page-filters"
            :open="categoryTree.selectedCategories"
            :showChevron="false"
          >
            <SfAccordionItem
              data-cy="svsf-categorySection-categoryTree-accordion-item"
              v-for="(cat, i) in categoryTree && categoryTree.items"
              :key="i"
              :header="cat.label"
              :isOpen="cat.isCurrent"
            >
              <SfList
                data-cy="svsf-categorySection-categoryTree-list"
                class="list"
              >
                <SfListItem
                  data-cy="svsf-categorySection-categoryTree-list-item"
                >
                  <SfMenuItem
                    data-cy="svsf-categorySection-categoryTree-menu-item"
                    :count="cat.count || ''"
                    :label="cat.label"
                  >
                    <template #label>
                      <nuxt-link :to="localePath(th.getCatLink(cat))">{{
                        $t('All')
                      }}</nuxt-link>
                    </template>
                  </SfMenuItem>
                </SfListItem>
                <SfListItem
                  data-cy="svsf-categorySection-categoryTree-list-item"
                  v-for="(subCat, j) in cat.items"
                  :key="j"
                >
                  <SfMenuItem
                    data-cy="svsf-categorySection-categoryTree-menu-item"
                    :count="subCat.count || ''"
                    :label="subCat.label"
                    :class="subCat.isCurrent ? 'sidebar--cat-selected' : ''"
                  >
                    <template #label="{ label }">
                      <nuxt-link :to="localePath(th.getCatLink(subCat))">{{
                        label
                      }}</nuxt-link>
                    </template>
                  </SfMenuItem>
                </SfListItem>
              </SfList>
            </SfAccordionItem>
          </SfAccordion>
        </SfLoader>
      </div>
      <div class="products" v-if="!loading">
        <transition-group
          v-if="isCategoryGridView"
          appear
          name="products__slide"
          tag="div"
          class="products__grid"
        >
          <SfProductCard
            data-cy="svsf-categorySection-product"
            v-for="(product, i) in products"
            :key="productGetters.getSlug(product)"
            :style="{ '--index': i }"
            :title="productGetters.getName(product)"
            :image="productGetters.getCoverImage(product)"
            :regular-price="
              productGetters.getFormattedPrice(
                productGetters.getPrice(product).regular,
              )
            "
            :special-price="
              productGetters.getFormattedPrice(
                productGetters.getPrice(product).special,
              )
            "
            :max-rating="5"
            :image-height="189"
            :score-rating="productGetters.getAverageRating(product)"
            :wishlistIcon="
              productGetters.getProductConcretes(product).length === 1 &&
              isAuthenticated
                ? 'heart'
                : false
            "
            :isOnWishlist="false"
            :showAddToCartButton="isAddToCartVisible(product)"
            :isAddedToCart="isProductInCart(product)"
            :badgeLabel="
              productGetters.getBadgeLabels(product)[0]
                ? productGetters.getBadgeLabels(product)[0].value
                : ''
            "
            @click:add-to-cart="addProductToCart(product)"
            @click:wishlist="
              addToWishlist({ product: product.concreteProducts[0] })
            "
            :link="
              localePath(
                `/p/${productGetters.getId(product)}/${productGetters.getSlug(
                  product,
                )}`,
              )
            "
            class="products__product-card"
          />
        </transition-group>
        <transition-group
          v-else
          appear
          name="products__slide"
          tag="div"
          class="products__list"
        >
          <CardHorizontal
            v-for="(product, i) in products"
            class="products__product-card-horizontal"
            :index="i"
            :product="product"
            :isAuthenticated="isAuthenticated"
            :key="productGetters.getSlug(product)"
            :isAddToCartVisible="isAddToCartVisible(product)"
            @click:add-to-cart="addProductToCart"
            @click:wishlist="
              addToWishlist({ product: product.concreteProducts[0] })
            "
          />
        </transition-group>
        <SfPagination
          data-cy="svsf-categorySection-pagination"
          v-if="!loading"
          v-show="pagination.totalPages > 1"
          class="products__pagination"
          :current="pagination.currentPage"
          :total="pagination.totalPages"
          :visible="5"
        />
        <!-- TODO: change accordingly when designed by UI team: https://github.com/DivanteLtd/storefront-ui/issues/941 -->
        <div
          v-show="pagination.totalPages > 1"
          class="products__pagination__options desktop-only"
        >
          <span class="products__pagination__label">{{
            $t('Show on page:')
          }}</span>
          <SfSelect
            data-cy="svsf-categorySection-itemsPerPage-select"
            class="products__items-per-page"
            :value="String(pagination.itemsPerPage)"
            @input="th.changeItemsPerPage"
          >
            <SfSelectOption
              v-for="option in pagination.pageOptions"
              :key="option"
              :value="option"
              class="products__items-per-page__option"
            >
              {{ option }}
            </SfSelectOption>
          </SfSelect>
        </div>
        <!-- end of TODO -->
      </div>
    </div>
    <SfSidebar
      data-cy="svsf-categorySection-filtersSidebar-sidebar"
      class="sidebar"
      :visible="isFilterSidebarOpen"
      :title="$t('Filters')"
      @close="toggleFilterSidebar"
    >
      <Filters
        data-cy="svsf-categorySection-filtersSidebar-filters"
        :facets="facets"
      >
        <template #categories-mobile>
          <SfAccordionItem
            data-cy="svsf-categorySection-filtersSidebar-accordion-item"
            :header="$t('Category')"
            class="filters__accordion-item"
          >
            <SfAccordion
              data-cy="svsf-categorySection-filtersSidebar-category-accordion"
              class="categories"
            >
              <SfAccordionItem
                :data-cy="`svsf-categorySection-filtersSidebar-category-accordion-item-${cat.slug}`"
                v-for="cat in categoryTree && categoryTree.items"
                :key="`category-${cat.slug}`"
                :header="cat.label"
              >
                <SfList
                  data-cy="svsf-categorySection-filtersSidebar-list"
                  class="list"
                >
                  <SfListItem
                    data-cy="svsf-categorySection-filtersSidebar-list-item-label"
                    class="list__item"
                  >
                    <SfMenuItem
                      data-cy="svsf-categorySection-filtersSidebar-menu-item-label"
                      :count="cat.coun || ''"
                      :label="cat.label"
                      icon=""
                    >
                      <template #label>
                        <nuxt-link
                          data-cy="svsf-categorySection-filtersSidebar-category-link"
                          :to="localePath(th.getCatLink(cat))"
                          :class="cat.isCurrent ? 'sidebar--cat-selected' : ''"
                        >
                          {{ $t('All') }}
                        </nuxt-link>
                      </template>
                    </SfMenuItem>
                  </SfListItem>
                  <SfListItem
                    :data-cy="`svsf-categorySection-filtersSidebar-list-item-${subCat.slug}`"
                    class="list__item"
                    v-for="subCat in cat.items"
                    :key="`subcat-${subCat.slug}`"
                  >
                    <SfMenuItem
                      :data-cy="`svsf-categorySection-filtersSidebar-menu-item-${subCat.slug}`"
                      :count="subCat.count || ''"
                      :label="subCat.label"
                      icon=""
                    >
                      <template #label="{ label }">
                        <nuxt-link
                          :data-cy="`svsf-categorySection-filtersSidebar-menu-item-${subCat.slug}-link`"
                          :to="localePath(th.getCatLink(subCat))"
                          :class="
                            subCat.isCurrent ? 'sidebar--cat-selected' : ''
                          "
                          >{{ label }}</nuxt-link
                        >
                      </template>
                    </SfMenuItem>
                  </SfListItem>
                </SfList>
              </SfAccordionItem>
            </SfAccordion>
          </SfAccordionItem>
        </template>
      </Filters>
    </SfSidebar>
  </div>
</template>

<script>
import {
  SfSidebar,
  SfButton,
  SfList,
  SfIcon,
  SfHeading,
  SfMenuItem,
  SfProductCard,
  SfPagination,
  SfAccordion,
  SfSelect,
  SfBreadcrumbs,
  SfLoader,
  SfNotification,
} from '@storefront-ui/vue';
import {
  computed,
  onMounted,
  ref,
  watch,
  onUnmounted,
  reactive,
  provide,
} from '@vue/composition-api';
import {
  useCart,
  useFacet,
  useUser,
  useWishlist,
  facetGetters,
  productGetters,
} from '@spryker-vsf/composables';
import { useUiHelpers, useUiState } from '~/composables';
import { onSSR } from '@vue-storefront/core';
import Filters from '../components/Filters';
import CardHorizontal from '../components/Category/CardHorizontal';
import LayoutSlot from '@spryker-oryx/vsf/lib/components/LayoutSlot';

export default {
  name: 'Category',
  transition: 'fade',
  setup(props, context) {
    onMounted(() => context.root.$scrollTo(context.root.$el, 2000));
    const th = useUiHelpers();
    const uiState = useUiState();
    const { isAuthenticated } = useUser();
    const { cart, addItem: addToCart, isInCart } = useCart();
    const { addItem: addToWishlist } = useWishlist();
    const { result, search, loading } = useFacet(
      th.getFacetsFromURL().categorySlug,
    );

    const products = computed(() => facetGetters.getProducts(result.value));
    const categoryTree = computed(() =>
      facetGetters.getCategoryTree(result.value),
    );
    const breadcrumbs = computed(() =>
      facetGetters.getBreadcrumbs(result.value),
    );
    const sortBy = computed(() => facetGetters.getSortOptions(result.value));
    const facets = computed(() =>
      facetGetters.getGrouped(result.value, ['color', 'size']),
    );
    const pagination = computed(() => facetGetters.getPagination(result.value));

    const cartError = computed(() => cart.value?.error ?? null);
    const cartErrorMessage = ref(null);

    function makeErrorMessage({ tag, value }) {
      return tag === 'validate'
        ? value.errors
            .map((error) => error.detail)
            .join(' ')
            .trim() || null
        : 'Something went wrong, please try again';
    }

    watch(cartError, () => {
      cartErrorMessage.value =
        cartError.value && !uiState.isCartSidebarOpen.value
          ? makeErrorMessage(cartError.value)
          : null;
    });

    const currentCategory = computed(() => {
      return breadcrumbs.value[breadcrumbs.value.length - 1];
    });
    const slotData = reactive({
      category: currentCategory,
    });

    provide('CURRENT_CATEGORY', slotData);

    onSSR(async () => {
      await search(th.getFacetsFromURL());
    });
    onMounted(async () => {
      await search(th.getFacetsFromURL());
    });

    onUnmounted(() => {
      uiState.isFilterSidebarOpen.value && uiState.toggleFilterSidebar();
    });

    const isProductInCart = (product) => {
      if (!product?.concreteProducts?.[0]) {
        return;
      }

      isInCart({ product: product.concreteProducts[0] });
    };

    const isAddToCartVisible = (product) => {
      return product?.concreteProducts?.length === 1;
    };

    const addProductToCart = (product, quantity) => {
      if (!product?.concreteProducts?.[0]) {
        return;
      }

      addToCart({
        product: product.concreteProducts[0],
        quantity: quantity ?? 1,
      });
    };

    const slotName = computed(() => context.root.$route.path);

    return {
      ...uiState,
      th,
      products,
      categoryTree,
      loading,
      productGetters,
      pagination,
      sortBy,
      facets,
      breadcrumbs,
      addToWishlist,
      addProductToCart,
      isProductInCart,
      cartErrorMessage,
      isAuthenticated,
      isAddToCartVisible,
      slotName,
      currentCategory,
    };
  },
  components: {
    SfButton,
    SfSidebar,
    SfIcon,
    SfList,
    SfProductCard,
    SfPagination,
    SfMenuItem,
    SfAccordion,
    SfSelect,
    SfBreadcrumbs,
    SfLoader,
    SfHeading,
    Filters,
    SfNotification,
    CardHorizontal,
    LayoutSlot,
  },
};
</script>

<style lang="scss" scoped>
#category {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.main {
  &.section {
    padding: var(--spacer-xs);
    @include for-desktop {
      padding: 0;
    }
  }
}
.category {
  &__heading {
    position: relative;
    padding: var(--spacer-base) 0;
    &:before {
      content: '';
      position: absolute;
      left: calc((100vw - 100%) / -2);
      right: calc((100vw - 100%) / -2);
      top: 0;
      bottom: 0;
      background-color: #f5f5f5;
      z-index: -1;
    }
  }
  &__title {
    line-height: 0.85;
    margin-left: -4px;
    margin-top: 8px;
  }
}
.navbar {
  position: relative;
  display: flex;
  &.section {
    padding: var(--spacer-sm);
    @include for-desktop {
      padding: 0;
    }
  }
  &__aside,
  &__main {
    font-size: 14px;
    display: flex;
    align-items: center;
    flex: 1;
    @include for-desktop {
      padding: 0;
    }
  }
  &__filters {
    width: 20%;
    padding-right: 48px;
    &-button {
      border: 1px solid var(--c-gray-outline);
      padding: 9px 16px;
      width: 100%;
      justify-content: space-between;
      font-size: 14px;
      border-radius: 2px;
    }
  }
  &__aside {
    flex: 0 0 20%;
    padding: var(--spacer-sm) var(--spacer-sm);
    border: 1px solid var(--c-light);
    border-width: 0 1px 0 0;
  }
  &__title {
    --heading-title-font-weight: var(--font-weight--light);
    --heading-title-font-size: var(--font-size--xl);
  }
  &__filters-button {
    --button-color: var(--c-link);
    --button-font-size: var(--font-size--base);
    --button-font-weight: var(--font-weight--normal);
    --button-text-decoration: none;
    display: flex;
    align-items: center;
    @include for-mobile {
      order: 1;
    }
    svg {
      fill: var(--c-text-muted);
      transition: fill 150ms ease;
    }
    &:hover {
      svg {
        fill: var(--c-primary);
      }
    }
  }
  &__label {
    font-family: var(--font-family--secondary);
    font-weight: var(--font-weight--normal);
    color: var(--c-link);
    margin: 0 var(--spacer-xs) 0 0;
  }
  &__select {
    --select-option-font-size: var(--font-size--base);
    --select-padding: var(--spacer-sm) 0;
  }
  &__sort {
    display: flex;
    align-items: center;
    margin: 0;
  }
  &__counter {
    font-family: var(--font-family--secondary);
    margin: auto;
    flex-grow: 1;
    @include for-desktop {
      margin: 0;
    }
  }
  &__view {
    display: flex;
    align-items: center;
    @include for-desktop {
      margin: 0 0 0 var(--spacer-2xl);
    }
    @include for-mobile {
      order: -1;
    }
    &-icon {
      --icon-color: var(--c-gray-outline);
      border: 1px solid var(--c-gray-outline);
      cursor: pointer;
      padding: var(--spacer-xs);
      transition-property: color, background-color;
      transition-duration: 0.35s;
      transition-timing-function: ease;
      &:nth-child(2) {
        border-radius: 2px 0 0 2px;
      }
      &:last-child {
        margin-left: -1px;
        margin-right: var(--spacer-base);
        border-radius: 0 2px 2px 0;
      }
      svg {
        flex-shrink: 0;
      }
      &.active,
      &:hover {
        background-color: #f0f0f0;
        --icon-color: #3f3e42;
      }
    }
    &-label {
      margin: 0 var(--spacer-sm) 0 0;
      font: var(--font-weight--normal) var(--font-size--base) / 1.6
        var(--font-family--secondary);
      color: var(--c-link);
    }
  }
}
.sort-by {
  --select-dropdown-z-index: 1;
  flex: unset;
  width: 11.875rem;
}
.main {
  display: flex;
}
.sidebar {
  @include for-desktop {
    flex: 0 0 20%;
    padding-right: var(--spacer-sm);
  }

  .sf-loader__overlay {
    position: static;
  }

  &::v-deep .sf-sidebar__content {
    @include for-mobile {
      height: calc(
        100% - var(--bottom-navigation-height, 3.75rem) -
          var(--bar-height, 3.125rem)
      );
    }
  }
}
.sidebar-filters {
  --sidebar-title-display: none;
  --sidebar-top-padding: 0;
  @include for-desktop {
    --sidebar-content-padding: 0 var(--spacer-xl);
    --sidebar-bottom-padding: 0 var(--spacer-xl);
  }
}
.list {
  --menu-item-font-size: var(--font-sm);
  &__item {
    &:not(:last-of-type) {
      --list-item-margin: 0 0 var(--spacer-sm) 0;
    }
  }
}
.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__grid {
    justify-content: space-between;
  }
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @include for-desktop {
      justify-content: flex-start;
    }
  }
  &__product-card {
    //--product-card-add-button-transform: translate3d(0, 30%, 0);
    --product-card-add-button-opacity: 1;
    --product-card-title-font-weight: var(--font-weight--bold);
    flex: 1 1 50%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    @include for-desktop {
      --product-card-padding: var(--spacer-sm);
      flex: 1 1 25%;
    }
  }
  &__product-card-horizontal {
    flex: 0 0 100%;
  }
  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &__slide-enter-active {
    transition: all 0.2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
  &__pagination {
    display: flex;
    justify-content: center;
    margin: var(--spacer-xl) 0 0 0;
  }
  @include for-desktop {
    margin: var(--spacer-sm) 0 0 var(--spacer-sm);
    &__pagination {
      &__options {
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
      }
      &__label {
        font-family: var(--font-family--secondary);
        font-size: var(--font-size--sm);
        font-weight: var(--font-weight--normal);
        color: var(--c-link);
        margin-right: var(--spacer-2xs);
      }
    }
    &__product-card-horizontal {
      margin: var(--spacer-lg) 0;
    }
    &__product-card {
      flex: 1 1 25%;
    }
    &__list {
      margin: 0 0 0 var(--spacer-sm);
    }
  }
}
::v-deep .page-filters {
  .sf-accordion-item {
    margin: 12px 0;
    &__header {
      --accordion-item-header-font-size: 16px;
      --accordion-item-header-color: var(--product-gray);
      --accordion-item-header-padding: 0;
      --chevron-color: var(--product-gray);
    }
    &__content {
      --accordion-item-content-padding: 10px 20px;
      --c-link: var(--product-gray);
      --menu-item-count-color: var(--product-gray);
      --list-item-margin: 0;
      line-height: 29px;
      a {
        text-align: left;
      }
      .sidebar--cat-selected {
        font-weight: 600;
        --c-link: var(--product-black);
        --menu-item-count-color: var(--product-black);
        a {
          text-decoration: underline;
        }
      }
    }
  }
}
.filters {
  &__accordion-item {
    --accordion-item-content-padding: 0;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
  }
}
::v-deep .sf-product-card {
  // Resetting max-width to get 3 columns on category listing
  --product-card-max-width: 33%;
  @include for-desktop {
    flex: 1 1 33%;
  }
  &__image-wrapper {
    flex-grow: 1;
    height: 100%;
    background-color: #f2f2f2;
    padding: var(--spacer-sm);
    text-align: center;
  }
  &__link {
    height: 100%;
  }
  &__image {
    display: block;
    .sf-image {
      --image-height: 189px;
      mix-blend-mode: darken;
      object-fit: contain;
    }
  }
  &__title {
    font-weight: 700;
    overflow: hidden;
    display: -webkit-box;
    word-break: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
  }
  &__add-button {
    --circle-icon-position: static;
    --button-box-shadow: none;
    --icon-color: var(--c-primary);
    --icon-size: 1.25rem;
    --button-size: 2.375rem;
    --button-background: transperent;
    --button-border-radius: 2px;
    --product-card-add-button-transform: none;
    border: 1px solid var(--c-gray-outline);
  }
  &__price {
    align-items: start;
    flex-direction: column;
    position: relative;
    margin: 0;
    .sf-price {
      &__old {
        --price-old-margin: 0;
        font-size: 15px;
        position: absolute;
        top: -16px;
      }
      &__special {
        font-size: 20px;
      }
    }
  }
  .section__price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }
  &__rating {
    margin-top: 8px;
  }
  .sf-badge {
    padding: 4px 8px;
    font-size: 11px;
    border-radius: 2px;
    --product-card-badge-left: 8px;
  }
}
</style>
