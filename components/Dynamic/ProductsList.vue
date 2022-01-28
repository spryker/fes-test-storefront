<template>
  <SfSection
    :title-heading="
      capitalizeFirstLetter(
        content.heading || `${content.productsType} products (${products.length})`
      )
    "
    class="section"
  >
    <SfLoader :class="{ loading }" :loading="loading">
      <SfCarousel class="carousel">
        <SfCarouselItem
          class="carousel__item"
          v-for="product in products"
          :key="productGetters.getSlug(product)"
        >
          <SfProductCard
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
            :score-rating="productGetters.getAverageRating(product)"
            :wishlistIcon="
              productGetters.getProductConcretes(product).length === 1 &&
              isAuthenticated
                ? 'heart'
                : false
            "
            :isOnWishlist="false"
            :showAddToCartButton="isAddToCartVisible(product)"
            :isAddedToCart="false"
            :badgeLabel="
              productGetters.getBadgeLabels(product)[0]
                ? productGetters.getBadgeLabels(product)[0].value
                : ''
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
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  SfProductCard,
  SfCarousel,
  SfSection,
  SfLoader,
} from '@storefront-ui/vue';
import { useInjectable } from '@spryker-oryx/vsf';
import { configureSSR, vsfRef } from '@vue-storefront/core';
import {
  computed,
  inject,
  onMounted,
  onServerPrefetch,
  onUnmounted,
} from '@vue/composition-api';
import { take } from 'rxjs/operators';
import {
  facetGetters,
  productGetters,
  useFacet,
  useUser,
} from '@spryker-vsf/composables';
import { Services } from '@spryker-oryx/experience';
import { useUiHelpers } from '~/composables';
export default Vue.extend({
  name: 'ProductsList',
  props: {
    componentId: {
      type: String,
      required: true,
    },
  },
  components: {
    SfProductCard,
    SfCarousel,
    SfSection,
    SfLoader,
  },
  setup(props) {
    const content$ = useInjectable(Services.Experience).getContent({
      key: props.componentId as string,
    });
    const content = vsfRef(
      {
        queryLink: null,
        maxProductsNumber: 0,
        productsType: "",
        heading: "",
      },
      `products-list-content-${props.componentId}`,
    );
    const categoryInject = inject('CURRENT_CATEGORY', {
      category: null,
    });
    const categoryLink = computed(() => categoryInject?.category?.link);
    const th = useUiHelpers();
    const contentSubscription = null;
    const { isAuthenticated } = useUser();
    configureSSR({
      vsfRef,
      onSSR: onServerPrefetch,
    });
    const { result, search, loading } = useFacet();
    const products = computed(() => {
      const data = facetGetters.getProducts(result.value);
      if (
        content.value.maxProductsNumber &&
        Number(content.value.maxProductsNumber)
      ) {
        return data.slice(0, Number(content.value.maxProductsNumber));
      }
      return data;
    });
    onMounted(async () => {
      const data: any = await content$.pipe(take(1)).toPromise();
      if (data) {
        content.value = data?.data;
      }
    });
    const makeQuery = (queryLink: string): Object => {
      return queryLink
        ? JSON.parse(
            '{"' +
              decodeURI(content.value.queryLink)
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g, '":"') +
              '"}',
          )
        : {};
    };
    const getCategorySlug = computed(() => {
      return categoryLink.value
        ? th.getFacetsFromURL(categoryLink.value).categorySlug
        : null;
    });

    const getMockProductsQuery = (categoryId, productsType): {q: string}|null => {
      if (categoryId === 3 && productsType === 'best-sell')
        return { q: '4165826 5425220 3628514' };
      if (categoryId === 53 && productsType === 'upsell')
        return { q: '4727133 5116532 3788413 3997828' };
      if (categoryId === 52 && 'cross-sell')
        return { q: '4705022 4670177 0123012 3186700' };

      return null;
    };

    content$.subscribe(async (res: any) => {
      content.value = res.data ? res.data : res;
      const query = makeQuery(content.value.queryLink);
      const itemsPerPage = Math.ceil(content.value.maxProductsNumber / 12) * 12;

      const mockProductsQuery = getMockProductsQuery(
        Number(getCategorySlug.value),
        content.value.productsType,
      )
      const categorySearch = mockProductsQuery || { categorySlug: getCategorySlug.value }

      await search({
        ...query,
        ...categorySearch,
        itemsPerPage,
      });
    });
    onUnmounted(() => {
      if (contentSubscription) {
        contentSubscription.unsubscribe();
      }
    });
    const isAddToCartVisible = (product) => {
      return product?.concreteProducts?.length === 1;
    };
    const capitalizeFirstLetter = (string: string): string => {
      if (!string) {
        return '';
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return {
      capitalizeFirstLetter,
      loading,
      content,
      products,
      productGetters,
      isAddToCartVisible,
      isAuthenticated,
    };
  },
});
</script>

<style lang="scss" scoped>
section {
  --section-margin: 10px;
  --section-content-margin: 0;
  --product-card-background: transparent;
}
</style>
