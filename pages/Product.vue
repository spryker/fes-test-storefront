<template>
  <div id="product">
    <SfNotification
      data-cy="svsf-productSection-error-message"
      :visible="!!cartErrorMessage"
      :message="cartErrorMessage"
      type="danger"
      class="message"
      @click:close="cartErrorMessage = null"
    >
      <template #icon>
        <SfIcon icon="error" color="white" />
      </template>
    </SfNotification>
    <div class="product__title">
      <SfBreadcrumbs
        data-cy="svsf-productSection-error-message"
        class="page-center breadcrumbs desktop-only"
        :breadcrumbs="breadcrumbs"
      />
      <div class="page-center product__header">
        <template v-for="label in productGetters.getBadgeLabels(products)">
          <SfBadge
            data-cy="svsf-productSection-badge"
            :class="label.frontEndReference"
            :key="label.value"
          >
            {{ label.value }}
          </SfBadge>
        </template>
        <SfHeading
          data-cy="svsf-productSection-heading"
          :title="productGetters.getName(product)"
          :level="3"
          class="sf-heading--no-underline sf-heading--left"
        />
        <SfIcon
          data-cy="svsf-productSection-drag-icon"
          icon="drag"
          size="xl"
          color="gray-secondary"
          class="product__drag-icon smartphone-only"
        />
      </div>
    </div>
    <div class="product">
      <ProductGallery :images="productGallery" />
      <div class="product__info">
        <div class="product__rating-and-logo">
          <div class="product__rating">
            <SfRating
              data-cy="svsf-productSection-rating"
              :score="averageRating"
              :max="5"
              :icon="starIcon.path"
            />
            <a href="#" class="product__count">
              {{ totalReviews }}
            </a>
          </div>
          <SfImage class="brand-logo" src="/brandlogo.png" alt="brand logo" />
        </div>
        <div>
          <div class="brand">by {{ brand }}</div>
          <div class="sku">SKU: {{ productGetters.getId(product) }}</div>
        </div>
        <div class="product__info--price">
          <SfPrice
            data-cy="svsf-productSection-price"
            :regular="productGetters.getFormattedPrice(productGetters.getPrice(product).regular)"
            :special="productGetters.getFormattedPrice(productGetters.getPrice(product).special)"
          />
        </div>
        <div class="product__info--options">
          <template v-for="(optionValue, optionName) in options">
            <template v-if="optionName === 'color'">
              <div class="product__colors desktop-only" :key="optionName">
                <p class="product__color-label">{{ optionValue.title }}:</p>
                <SfColor
                  data-cy="svsf-productSection-color"
                  v-for="(color, i) in optionValue.options"
                  :key="i"
                  :color="color.value"
                  class="product__color"
                  @click="updateFilter({ color })"
                />
              </div>
            </template>
            <template v-else>
              <SfSelect
                data-cy="svsf-productSection-filter-select"
                :value="configuration[optionName]"
                @input="(option) => updateFilter({ [optionName]: option })"
                :placeholder="$t('Choose an option')"
                :label="optionValue.title"
                class="sf-select--underlined"
                :required="true"
                :key="optionName"
              >
                <SfSelectOption
                  v-for="option in optionValue.options"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </SfSelectOption>
              </SfSelect>
            </template>
          </template>
          <template v-if="Object.keys(configuration).length">
            <SfButton
              data-cy="svsf-productSection-resetAttributes-buutton"
              class="sf-button--text"
              @click="resetAttributes()"
            >
              {{ $t('Reset attributes') }}
            </SfButton>
          </template>
          <div class="product__actions">
            <SfAddToCart
              data-cy="svsf-productSection-addToCart"
              :stock="productGetters.getStock(product)"
              v-model="qty"
              :canAddToCart="productGetters.getStock(product) > 0"
              class="product__add-to-cart"
            >
              <template #add-to-cart-btn>
                <SfButton
                  :disabled="loading || !isProductConfigured"
                  @click="addItemToCart({ product, quantity: parseInt(qty) })"
                >
                  <SfIcon
                    :icon="cartPlusIcon.path"
                    :class="cartPlusIcon.class"
                    :viewBox="cartPlusIcon.viewBox"
                  />
                  Add to Cart
                </SfButton>
              </template>
            </SfAddToCart>
            <SfButton
              data-cy="svsf-productSection-saveLater-button"
              v-if="isAuthenticated"
              class="sf-button--text desktop-only product__save"
              :disabled="loading || !isProductConfigured"
              @click="addToWishlist({ product })"
            >
              <SfIcon
                :icon="listPlusIcon.path"
                :class="listPlusIcon.class"
                :viewBox="listPlusIcon.viewBox"
              />
            </SfButton>
          </div>
        </div>
      </div>
      <SfTabs
        data-cy="svsf-productSection-tabs"
        :openTab="1"
        class="product__tabs"
      >
        <SfTab
          data-cy="svsf-productionSection-properties-tab"
          :title="$t('Description')"
        >
          <h1>{{ $t('Description') }}</h1>
          <div>
            {{ productGetters.getDescription(product) }}
          </div>
        </SfTab>
        <SfTab
          data-cy="svsf-productSection-properties-tab"
          :title="$t('Details')"
        >
          <h1>{{ $t('Details') }}</h1>
          <SfProperty
            data-cy="svsf-productSection-properties-property-list"
            v-for="(property, i) in properties"
            :key="i"
            :name="property.name"
            :value="property.value"
            class="product__property"
          >
            <template v-if="property.name === 'Category'" #value>
              <SfButton
                data-cy="svsf-productSection-property-button"
                class="product__property__button sf-button--text"
              >
                {{ property.value }}
              </SfButton>
            </template>
          </SfProperty>
        </SfTab>
        <SfTab
          :title="$t('Read reviews', { count: totalReviews })"
          data-cy="svsf-productSection-review-tab"
        >
          <SfReview
            data-cy="svsf-productSection-review"
            v-for="review in reviews"
            :key="reviewGetters.getReviewId(review)"
            :author="reviewGetters.getReviewAuthor(review)"
            :date="reviewGetters.getReviewDate(review)"
            :message="reviewGetters.getReviewMessage(review)"
            :max-rating="5"
            :rating="reviewGetters.getReviewRating(review)"
            :char-limit="250"
            read-more-text="Read more"
            hide-full-text="Read less"
            class="product__review"
          />
        </SfTab>
        <SfTab
          data-cy="svsf-productSection-additional-tab"
          :title="$t('Additional Information')"
          class="product__additional-info"
        >
          <div>{{ $t('Additional Information') }}</div>
        </SfTab>
      </SfTabs>
    </div>
    <LayoutSlot v-if="currentCategory" :slotName="slotName" />
    <RelatedProducts
      data-cy="svsf-productSection-relatedProducts"
      v-if="relatedProducts.length"
      :products="relatedProducts"
      :loading="relatedLoading"
      :title="$t('Match it with')"
    />
    <InstagramFeed data-cy="svsf-productSection-instagramFeed" />
    <SfBanner
      data-cy="svsf-productSection-banner"
      image="/homepage/bannerD.png"
      :subtitle="$t('Fashion to Take Away')"
      :title="$t('Download our application to your mobile')"
      class="sf-banner--left desktop-only banner-app"
    >
      <template #call-to-action>
        <div class="banner-app__call-to-action">
          <SfImage
            data-cy="svsf-productSection-google-image"
            class="banner-app__image"
            src="/homepage/google.png"
            :width="191"
            :height="51"
            :alt="$t('Google Play')"
          />
          <SfImage
            data-cy="svsf-productSection-store-image"
            class="banner-app__image"
            src="/homepage/apple.png"
            :width="174"
            :height="57"
            :alt="$t('App Store')"
          />
        </div>
      </template>
    </SfBanner>
  </div>
</template>
<script>
import {
  SfProperty,
  SfHeading,
  SfBadge,
  SfPrice,
  SfRating,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfIcon,
  SfImage,
  SfBanner,
  SfReview,
  SfBreadcrumbs,
  SfButton,
  SfColor,
  SfNotification,
} from '@storefront-ui/vue';

import InstagramFeed from '~/components/InstagramFeed.vue';
import RelatedProducts from '~/components/RelatedProducts.vue';
import ProductGallery from '~/components/ProductGallery.vue';
import {
  ref,
  computed,
  watch,
  onMounted,
  provide,
  reactive,
} from '@vue/composition-api';
import {
  useProduct,
  useCart,
  productGetters,
  useReview,
  useWishlist,
  reviewGetters,
  useUser,
} from '@spryker-vsf/composables';
import { onSSR } from '@vue-storefront/core';
import { useUiState } from '~/composables';
import LayoutSlot from '@spryker-oryx/vsf/lib/components/LayoutSlot';
import { starIcon, cartPlusIcon, listPlusIcon } from '~/assets/icons';

export default {
  name: 'Product',
  transition: 'fade',
  setup(props, context) {
    const qty = ref(1);
    const { id } = context.root.$route.params;
    const { products, search } = useProduct(`product-${id}`);
    const { isCartSidebarOpen } = useUiState();

    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading,
    } = useProduct('relatedProducts');
    const { addItem, loading, cart, error } = useCart();
    const { reviews: productReviews, search: searchReviews } =
      useReview('productReviews');
    const { addItem: addToWishlist } = useWishlist();
    const { isAuthenticated } = useUser();

    const productQuery = context.root.$route.query;
    const product = computed(
      () =>
        productGetters.getFiltered(products.value, {
          master: true,
          attributes: productQuery,
        })[0],
    );

    const options = computed(() =>
      productGetters.getAttributesExpanded(
        products.value,
        productGetters.getAttributesName(products.value),
        {
          attributes: productQuery,
        },
      ),
    );
    const configuration = computed(() =>
      productGetters.getAttributesExpanded(
        product.value,
        productGetters.getAttributesName(products.value),
        {
          attributes: productQuery,
        },
      ),
    );
    const isProductConfigured = computed(
      () =>
        productGetters.getAttributesName(products.value).length ===
        Object.keys(configuration.value).length,
    );
    const properties = computed(() =>
      productGetters.getProperties(product.value),
    );
    const categories = computed(() =>
      productGetters.getCategoryIds(product.value),
    );

    const breadcrumbs = computed(() =>
      productGetters.getProductBreadcrumbs(products.value),
    );
    const currentCategory = computed(() => {
      return breadcrumbs.value[breadcrumbs.value.length - 2];
    });
    const slotData = reactive({
      category: currentCategory,
    });
    provide('CURRENT_CATEGORY', slotData);

    const reviews = computed(() =>
      reviewGetters.getItems(productReviews.value),
    );

    const cartError = ref(null);
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
        cartError.value && !isCartSidebarOpen.value
          ? makeErrorMessage(cartError.value)
          : null;
    });

    const productGallery = computed(() =>
      productGetters.getGallery(product.value).map((img) => ({
        mobile: { url: img.small },
        desktop: { url: img.normal },
        big: { url: img.big },
        alt: 'gallery',
      })),
    );

    async function addItemToCart(params) {
      cartError.value = null;
      await addItem(params);
      cartError.value = error.value?.addItem ?? null;
    }

    onMounted(async () => {
      await search({ id });
      await searchRelatedProducts({ catId: [categories.value[0]], limit: 8 });
      await searchReviews({ productId: id });
    });

    onSSR(async () => {
      await search({ id });
      await searchRelatedProducts({ catId: [categories.value[0]], limit: 8 });
      await searchReviews({ productId: id });
    });

    const updateFilter = (filter) => {
      context.root.$router.push({
        path: context.root.$route.path,
        query: {
          ...configuration.value,
          ...filter,
        },
      });
    };

    const resetAttributes = () => {
      context.root.$router.push({
        path: context.root.$route.path,
        query: {},
      });
    };

    const slotName = computed(() => context.root.$route.path);

    const brand = computed(() => {
      const propertiesValue = properties.value;
      for (let i = 0; i < propertiesValue.length; i++) {
        if (propertiesValue[i].name.toLowerCase() === 'brand') {
          return propertiesValue[i].value;
        }
      }
      return 'Unknown';
    });

    return {
      currentCategory,
      breadcrumbs,
      slotName,
      updateFilter,
      resetAttributes,
      addToWishlist,
      configuration,
      isProductConfigured,
      properties,
      products,
      product,
      reviews,
      reviewGetters,
      isAuthenticated,
      averageRating: computed(() =>
        productGetters.getAverageRating(product.value),
      ),
      totalReviews: computed(() =>
        productGetters.getTotalReviews(product.value),
      ),
      relatedProducts: computed(() =>
        productGetters.getFiltered(relatedProducts.value, {
          master: true,
          related: true,
        }),
      ),
      relatedLoading,
      options,
      qty,
      addItemToCart,
      loading,
      productGetters,
      productGallery,
      cartErrorMessage,
      starIcon,
      cartPlusIcon,
      listPlusIcon,
      brand,
    };
  },
  components: {
    LayoutSlot,
    SfColor,
    SfProperty,
    SfHeading,
    SfBadge,
    SfPrice,
    SfRating,
    SfSelect,
    SfAddToCart,
    SfTabs,
    ProductGallery,
    SfIcon,
    SfImage,
    SfBanner,
    SfReview,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    SfNotification,
  },
};
</script>
<style lang="scss" scoped>
#product {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0;
  }
  --product-black: #2f2f2f;
  --product-light-gray: #f5f5f5;
  --product-gray: #8f8f8f;
}
.product {
  @include for-desktop {
    display: flex;
    max-width: var(--header-width, 77.5rem);
    margin: 30px auto 0;
    flex-wrap: wrap;
  }
  &__actions {
    display: flex;
    gap: 18px;
    margin-top: 20px;
  }
  &__info {
    margin: var(--spacer-sm) auto var(--spacer-xs);
    @include for-desktop {
      flex: 1;
      margin: 0 0 0 30px;
    }

    &--options,
    &--price {
      margin-top: 20px;
    }

    &--options {
      --c-secondary-variant: var(--product-black);
      --select-label-font-weight: 600;
    }

    &--price {
      --price-special-font-size: 24px;
      .sf-price {
        --price-align-items: center;
        gap: 10px;
        &__old {
          --price-old-color: var(--product-gray);
          --price-old-font-size: 18px;
          order: 1;
        }
      }
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --badge-background: var(--c-primary);
    --heading-title-font-size: 28px;
    --badge-font-size: 10px;
    --badge-padding: 3px 12px;
    --badge-height: auto;
    --badge-min-width: none;
    --badge-min-height: none;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
    @include for-desktop {
      margin: 0 auto;
    }

    .sf-badge {
      text-transform: uppercase;
      white-space: nowrap;
    }

    .sf-heading__title {
      line-height: 35px;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__rating-and-logo {
    display: flex;
    margin: 22px 0 16px;
    justify-content: space-between;
  }
  &__rating {
    display: flex;
    align-items: center;

    .sf-rating__icon {
      --icon-size: 16px !important;
    }
  }
  &__count {
    @include font(
      --count-font,
      var(--weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    font-size: 13px;
    color: var(--product-gray);
    text-decoration: none;
    margin: 0 0 0 6px;
  }
  &__description {
    color: var(--c-link);
    margin-top: var(--spacer-xl);
    @include font(
      --product-description-font,
      var(--font-weight--normal),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
  }
  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__add-to-cart {
    --button-border-radius: 2px;
    --button-height: 52px;
    --icon-color: var(--c-white);
    margin: var(--spacer-base) var(--spacer-sm) 0;
    flex: 1;
    @include for-desktop {
      margin: 0;
    }

    .sf-button {
      gap: 12px;
      flex: 1;
      &.is-disabled--button {
        --icon-color: var(--c-text-disabled);
      }
    }
  }
  &__guide,
  &__compare,
  &__save {
    --icon-color: var(--c-primary);
    --button-size: 52px;
    --button-border-color: var(--c-gray-outline);
    --button-border-width: 1px;
    display: flex;
    margin: 0;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    --tabs-content-border-color: #eaeaea;
    --tabs-content-font-size: 15px;
    --tabs-content-color: #4c4c4c;
    --h1-font-size: 32px;
    ::v-deep {
      .sf-tabs {
        &__title {
          --tabs-title-font-size: 16px;
          --tabs-title-color: var(--product-gray);
          --tabs-title-padding: 12px 40px;
          --tabs-title-margin: 0 0 -2px;
          &.is-active {
            --tabs-title-color: #333;
            --tabs-title-border-color: var(--c-primary);
          }
        }
        &__content__tab {
          --tabs-content-tab-padding: 30px 0;
          width: 670px;

          h1 {
            line-height: 40px;
            font-weight: 400;
            margin-bottom: 15px;
          }
        }
      }
    }
    margin: var(--spacer-lg) 0 var(--spacer-2xl);
    width: 100%;
    @include for-desktop {
      margin-top: var(--spacer-2xl) 0 0 0;
      --tabs-content-tab-padding: 3.5rem 0 0 0;
    }
  }
  &__property {
    --property-name-content: '';
    --property-name-font-size: 15px;
    --property-value-font-size: var(--property-name-font-size);
    --property-value-color: var(--c-black);
    --property-name-color: var(--product-gray);
    --property-value-font-weight: 400;
    padding: 10px 20px;
    &__button {
      --button-font-size: var(--font-size--base);
    }

    &:nth-child(even) {
      background-color: var(--product-light-gray);
    }

    span {
      flex: 1;
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
    &:last-of-type {
      border: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
    @include for-desktop {
      padding-bottom: 0;
    }
  }
  &__additional-info {
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      color: var(--c-link);
      font-weight: var(--font-weight--bold);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
}

.product__title {
  background-color: var(--product-light-gray);
  padding: 14px 0;
  margin: 0;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: calc((100vw - 100%) / -2);
    right: calc((100vw - 100%) / -2);
    top: 0;
    bottom: 0;
    background-color: var(--product-light-gray);
    z-index: -1;
  }
}

.page-center {
  max-width: var(--header-width, 77.5rem);
  margin: 0 auto;
}

.brand {
  color: var(--product-black);
  font-size: 18px;
}

.sku {
  color: var(--product-gray);
  font-size: 14px;
}

.breadcrumbs {
  --breadcrumbs-list-item-seperator: '/';
  --breadcrumbs-font-size: 13px;
  --breadcrumbs-list-item-before-padding: 8px;
  --breadcrumbs-color: #9ea1a7;
  --breadcrumbs-list-item-before-color: var(--breadcrumbs-color);
  --link-color: var(--breadcrumbs-color);
  .sf-breadcrumbs__breadcrumb {
    --link-color: var(--breadcrumbs-color);
  }
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>

<style lang="scss">
.product__info--options {
  .sf-button--text {
    --button-text-decoration: none;
  }
  .sf-select {
    padding-top: 19px;

    &__label {
      text-transform: uppercase;
    }

    &__dropdown {
      height: 48px;
    }
  }
}

.sf-add-to-cart__select-quantity {
  --quantity-selector-width: 122px;
  --input-font-size: 16px;
  --input-color: var(--product-black);
  margin-inline-end: 10px;
  border-radius: 2px;
  padding: 0 10px;
}

.sf-quantity-selector__button {
  --button-size: 28px;
  --button-padding: 0;
  --button-background: var(--c-white);
  --button-color: var(--product-gray);
  flex-shrink: 0;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.04),
    0px 10px 10px rgba(0, 0, 0, 0.0474128);
}
</style>
