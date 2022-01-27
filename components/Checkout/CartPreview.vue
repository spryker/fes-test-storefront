<template>
  <div class="cart-preview">
    <div class="highlighted">
      <SfHeading
        data-cy="svsf-cartPreview-heading"
        :level="5"
        title="Order summary"
        class="sf-heading--left sf-heading--no-underline cart-preview__title"
      />
    </div>
    <div class="highlighted">
      <SfProperty
        data-cy="svsf-cartPreview-totalItems-property"
        :name="$t('Products')"
        :value="totalItems"
        class="sf-property--full-width property"
      />
      <SfProperty
        data-cy="svsf-cartPreview-subtotal-property"
        :name="$t('Subtotal')"
        :value="`${cartGetters.getFormattedPrice(totals.subtotal)}`"
        :class="[
          'sf-property--full-width',
          'property',
          { discounted: totals.special > 0 },
        ]"
      />
      <SfProperty
        data-cy="svsf-cartPreview-shippingPrice-property"
        :name="$t('Shipping')"
        v-if="shippingPrice"
        :value="`${cartGetters.getFormattedPrice(shippingPrice)}`"
        class="sf-property--full-width property"
      />
      <SfProperty
        data-cy="svsf-cartPreview-tax-property"
        :name="$t('Tax')"
        v-if="taxes"
        :value="`${cartGetters.getFormattedPrice(taxes)}`"
        class="sf-property--full-width"
      />
      <template v-if="vouchers.length">
        <SfProperty
          :data-cy="`svsf-cartPreview-vouchers-property-${voucher.id}`"
          :name="$t('Voucher')"
          v-for="voucher in vouchers"
          :key="voucher.id"
          :value="`- ${cartGetters.getFormattedPrice(voucher.value)}`"
          class="sf-property--full-width sf-property--small property"
        >
          <template #name>
            <span class="sf-property__name">
              {{ $t('Voucher') }} ({{ voucher.name }})
              <a
                data-cy="svsf-cartPreview-removeVoucher-link"
                href="#"
                @click.prevent="() => removeCoupon({ coupon: voucher.code })"
                >X</a
              >
            </span>
          </template>
        </SfProperty>
      </template>
      <template v-if="discounts.length">
        <SfProperty
          :data-cy="`svsf-cartPreview-discounts-property-${discount.id}`"
          :name="$t('Discount')"
          v-for="discount in discounts"
          :key="discount.id"
          :value="`- ${cartGetters.getFormattedPrice(discount.value)}`"
          class="sf-property--full-width sf-property--small property cart-preview__discount"
        >
          <template #name>
            <span class="sf-property__name">
              {{ $t('Discount') }} ({{ discount.name }})
            </span>
          </template>
        </SfProperty>
      </template>
      <template v-if="giftCards.length">
        <SfProperty
          :data-cy="`svsf-cartPreview-giftCards-property-${giftCard.id}`"
          :name="$t('Gift Card')"
          v-for="giftCard in giftCards"
          :key="giftCard.id"
          :value="`- ${cartGetters.getFormattedPrice(giftCard.value)}`"
          class="sf-property--full-width sf-property--small property"
        >
          <template #name>
            <span class="sf-property__name">
              {{ $t('Gift Card') }} ({{ giftCard.name }})
              <a
                data-cy="svsf-cartPreview-removeGiftCard-link"
                href="#"
                @click.prevent="() => removeCoupon({ coupon: giftCard.code })"
                >X</a
              >
            </span>
          </template>
        </SfProperty>
      </template>
      <SfProperty
        data-cy="svsf-cartPreview-totalsSpecial-property"
        v-if="totals.special > 0"
        :value="`${cartGetters.getFormattedPrice(totals.special)}`"
        class="sf-property--full-width sf-property--small property special-price"
      />
      <SfProperty
        data-cy="svsf-cartPreview-total-property"
        :name="$t('Total')"
        :value="`${cartGetters.getFormattedPrice(
          totals.total + shippingPrice + taxes,
        )}`"
        class="sf-property--full-width sf-property--large cart-preview__total-price"
      />
      <VoucherCardForm />
    </div>
    <div class="highlighted">
      <SfCharacteristic
        :data-cy="`svsf-cartPreview-characteristics-${characteristic.title}`"
        v-for="characteristic in characteristics"
        :key="characteristic.title"
        :title="characteristic.title"
        :description="characteristic.description"
        :icon="characteristic.icon"
        class="characteristic"
      />
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfButton,
  SfCollectedProduct,
  SfProperty,
  SfCharacteristic,
  SfInput,
  SfCircleIcon,
} from '@storefront-ui/vue';
import { computed, ref } from '@vue/composition-api';
import {
  useCart,
  checkoutGetters,
  cartGetters,
  shippingProviderGetters,
  useShippingProvider,
  useTax,
  taxGetters,
} from '@spryker-vsf/composables';
import VoucherCardForm from './VoucherCardForm';

export default {
  name: 'CartPreview',
  components: {
    SfHeading,
    SfButton,
    SfCollectedProduct,
    SfProperty,
    SfCharacteristic,
    SfInput,
    SfCircleIcon,
    VoucherCardForm,
  },
  setup() {
    const { state: shippingProvider } = useShippingProvider();
    const { cart, removeItem, updateQuantity, applyCoupon, removeCoupon } =
      useCart();
    const { attributes } = useTax();
    const tax = computed(() => taxGetters.getTaxAmount(attributes.value));
    const listIsHidden = ref(false);
    const products = computed(() => cartGetters.getItems(cart.value));
    const totalItems = computed(() => cartGetters.getTotalItems(cart.value));
    const shippingPrice = computed(
      () =>
        shippingProviderGetters.getSelectedMethodPrice(shippingProvider.value)
          .regular,
    );
    const totals = computed(() => cartGetters.getTotals(cart.value));
    const discounts = computed(() => cartGetters.getDiscounts(cart.value));
    const vouchers = computed(() => cartGetters.getCoupons(cart.value));
    const giftCards = computed(() => cartGetters.getGiftCards(cart.value));
    const taxes = computed(() => (shippingPrice.value ? totals.value.tax : 0));

    return {
      discounts,
      totalItems,
      listIsHidden,
      vouchers,
      giftCards,
      products,
      totals,
      tax,
      removeItem,
      updateQuantity,
      checkoutGetters,
      cartGetters,
      applyCoupon,
      removeCoupon,
      characteristics: [
        {
          title: 'Safety',
          description: 'It carefully packaged with a personal touch',
          icon: 'safety',
        },
        {
          title: 'Easy shipping',
          description:
            'You’ll receive dispatch confirmation and an arrival date',
          icon: 'shipping',
        },
        {
          title: 'Changed your mind?',
          description: 'Rest assured, we offer free returns within 30 days',
          icon: 'return',
        },
      ],
      shippingPrice,
      taxes,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart-preview {
  border: 1px solid #DCE0E5;
  border-radius: 2px;

  .sf-heading__title {
    font-weight: var(--font-weight--medium);
  }


  .highlighted {
    box-sizing: border-box;
    width: 100%;
    padding: var(--spacer-lg) var(--spacer-lg) 0;

    &:last-child {
      padding-bottom: var(--spacer-lg);
    }
  }

  .total-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacer-xl);
  }

  .property {
    margin-bottom: var(--spacer-sm);
  }


  .characteristic {
    &:not(:last-child) {
      margin-bottom: var(--spacer-lg);
    }
  }

  .promo-code {
    display: flex;
    align-items: flex-start;

    &__button {
      --button-width: 6.3125rem;
      --button-height: var(--spacer-lg);
    }

    &__input {
      --input-background: var(--c-white);
      flex: 1;
    }
  }

  .discounted {
    &::v-deep .sf-property__value {
      color: var(--c-danger);
      text-decoration: line-through;
    }
  }

  .special-price {
    justify-content: flex-end;

    &::v-deep .sf-property__name {
      display: none;
    }
  }
}
</style>

<style lang="scss">
.cart-preview {
  &__discount {
    .sf-property {
      &__value {
        --property-value-color: var(--c-secondary);
        white-space: nowrap;
      }
    }
  }
  &__total-price {
    .sf-property {
      &__name {
        --property-name-font-weight: var(--font-weight--bold);
        --property-name-color: var(--c-text);
      }
      &__value {
        --property-value-font-weight: var(--font-weight--bold);
        --property-value-color: var(--c-text);
      }
    }
  }
  .sf-property {
    --property-name-color: #8F8F8F;
    --property-value-color: #8F8F8F;
    --property-value-font-weight: var(--font-weight--normal);
    &__name, &__value {
      font-size: 15px;
    }
  }
}
</style>
