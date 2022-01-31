<template>
  <div>
    <div class="info">
      <div class="info__item info__item--half">
        <div class="info__col info__col--title">
          {{ $t('Shipping address') }}:
        </div>

        <div class="info__col info__col--content">
          {{ shippingDetails.firstName }} {{ shippingDetails.lastName }}<br />
          {{ shippingDetails.zipCode }} {{ shippingDetails.address1 }}, {{ shippingDetails.address2 }}<br />
          {{ shippingDetails.city }}<br />
          {{ shippingDetails.country }}<br />
          {{ shippingDetails.phone }}
        </div>

        <div class="info__col info__col--right">
          <SfButton
            data-cy="svsf-checkoutPaymentSection-shippingEdit-button"
            class="sf-button--text"
            @click="$emit('edit', 'shipping')"
          >
            <SfImage
              src="/icons/edit-grey.svg"
              alt="Edit"
              class="info__edit"
            />
          </SfButton>
        </div>
      </div>
      <div class="info__item info__item--half">
        <div class="info__col info__col--title">
          {{ $t('Billing address') }}:
        </div>
        <div class="info__col info__col--content">
          <template v-if="billingSameAsShipping" class="content">
            {{ $t('Same as shipping address') }}
          </template>
          <template v-else>
            <div>
              {{ billingDetails.firstName }} {{ billingDetails.lastName }}<br />
              {{ billingDetails.zipCode }} {{ billingDetails.address1 }}, {{ billingDetails.address2 }}<br />
              {{ billingDetails.city }}<br />
              {{ billingDetails.country }}<br />
              {{ billingDetails.phone }}
            </div>
          </template>
        </div>
        <div class="info__col info__col--right">
          <SfButton
            data-cy="svsf-checkoutPaymentSection-billingEdit-button"
            class="sf-button--text"
            @click="$emit('edit', 'billing')"
            >
              <SfImage
                src="/icons/edit-grey.svg"
                alt="Edit"
                class="info__edit"
              />
            </SfButton>
        </div>
      </div>
      <div class="info__item">
        <div class="info__col info__col--title">
          {{ $t('Shipping method') }}:
        </div>

        <div class="info__col info__col--content">
          <div class="shipping-title">
            <SfImage
              :src="`/icons/${shippingName[0].toLowerCase()}.svg`"
              :alt="shippingName[0]"
            />
            <div>
              {{ shippingName[0] }}
            </div>
          </div>

          {{ shippingName[1] }} - {{ formattedShippingPrice }}
        </div>

        <div class="info__col info__col--right">
          <SfButton
            data-cy="svsf-checkoutPaymentSection-shippingEdit-button"
            class="sf-button--text"
            @click="$emit('edit', 'shipping')"
          >
            <SfImage
              src="/icons/edit-grey.svg"
              alt="Edit"
              class="info__edit"
            />
          </SfButton>
        </div>
      </div>
    </div>

    <div class="summary">
        <VsfPaymentProvider
          data-cy="svsf-checkoutPaymentSection-vsfPaymentProvider"
          @status="isPaymentReady = $event"
        />

        <SfCheckbox
          data-cy="svsf-checkoutPaymentSection-terms-checkbox"
          v-model="terms"
          name="terms"
          class="summary__terms"
        >
          <template #label>
            <div class="sf-checkbox__label">
              {{ $t('I agree to') }}
              <SfLink href="#"> {{ $t('Terms and conditions') }}</SfLink>
            </div>
          </template>
        </SfCheckbox>

        <div class="summary__action">
          <SfButton
            data-cy="svsf-checkoutPaymentSection-makeOrder-button"
            :disabled="
              loading ||
              !isPaymentReady ||
              !terms ||
              checkoutDataComposablesLoading
            "
            class="summary__action-button"
            @click="processOrder"
          >
            {{ $t('Make an order') }}
          </SfButton>
          <NuxtLink to="/checkout/billing">
            <SfButton
              data-cy="svsf-checkoutPaymentSection-back-button"
              class="smartphone-only sf-button sf-button--underlined summary__back-button"
            >
              {{ $t('Go back') }}
            </SfButton>
          </NuxtLink>
        </div>
      </div>
  </div>
</template>

<script>
import {
  SfHeading,
  SfTable,
  SfCheckbox,
  SfButton,
  SfDivider,
  SfImage,
  SfIcon,
  SfPrice,
  SfProperty,
  SfAccordion,
  SfLink,
} from '@storefront-ui/vue';
import { ref, computed, inject, onBeforeMount } from '@vue/composition-api';
import {
  useUser,
  useCustomerPersonalDetails,
  useShipping,
  useShippingProvider,
  useBilling,
  usePaymentProvider,
  useCart,
  cartGetters,
  useMakeOrder,
  shippingProviderGetters,
  useTax,
  taxGetters,
} from '@spryker-vsf/composables';

export default {
  name: 'ReviewOrder',
  components: {
    SfHeading,
    SfTable,
    SfCheckbox,
    SfButton,
    SfDivider,
    SfImage,
    SfIcon,
    SfPrice,
    SfProperty,
    SfAccordion,
    SfLink,
    VsfPaymentProvider: () =>
      import('~/components/Checkout/VsfPaymentProvider'),
  },
  setup(props, context) {
    const { cart, load: loadCart, removeItem } = useCart();
    const { order, make, loading } = useMakeOrder();

    const isPaymentReady = ref(false);
    const terms = ref(false);
    const { attributes } = useTax();
    const tax = computed(() => taxGetters.getTaxAmount(attributes.value));
    const customerPersonalDetails = useCustomerPersonalDetails();
    const billing = useBilling();
    const shipping = useShipping();
    const shippingProvider = useShippingProvider();
    const paymentProvider = usePaymentProvider();

    const checkoutDataComposables = [
      customerPersonalDetails,
      billing,
      shipping,
      shippingProvider,
      paymentProvider,
    ];

    onBeforeMount(async () => {
      await Promise.all([
        loadCart(),
        ...checkoutDataComposables.map((composable) => composable.load()),
      ]);
    });

    const checkoutDataComposablesLoading = computed(() =>
      checkoutDataComposables.some((composable) => composable.loading.value),
    );

    const processOrder = async () => {
      await make();
      context.root.$router.push(
        `/checkout/thank-you?order=${order.value.orderReference}`,
      );
    };

    const shippingDetails = shipping.shipping;
    const billingDetails = billing.billing;

    const billingSameAsShipping = inject('checkoutBillingSameAsShipping');

    const shippingPrice = computed(
      () =>
        shippingProviderGetters.getSelectedMethodPrice(
          shippingProvider.state.value,
        ).regular,
    );

    const formattedShippingPrice = computed(() =>
      cartGetters.getFormattedPrice(
        shippingProviderGetters.getSelectedMethodPrice(
          shippingProvider.state.value,
        ).regular
      )
    );

    const shippingName = computed(() =>
      shippingProviderGetters.getSelectedMethodName(
        shippingProvider.state.value,
      ).split(': '),
    );

    const vouchers = computed(() => cartGetters.getCoupons(cart.value));
    const giftCards = computed(() => cartGetters.getGiftCards(cart.value));
    const totals = computed(() => cartGetters.getTotals(cart.value));
    const taxes = computed(() => totals.value.tax);
    const { user, isAuthenticated } = useUser();

    const personalDetails = inject('checkoutPersonalDetails');

    const products = computed(() => cartGetters.getItems(cart.value));

    const removeCartItem = async (params) => {
      await removeItem(params);

      if (!products.value.length) {
        context.root.$router.push('/');
      }
    };

    const totalPrice = computed(() => {
      const { priceToPay, total } = totals.value;
      return cartGetters.getFormattedPrice(
        (priceToPay ?? total) + shippingPrice.value + taxes.value,
      );
    });

    return {
      isAuthenticated,
      isPaymentReady,
      terms,
      products,
      totals,
      tax,
      taxes,
      totalPrice,
      tableHeaders: ['Description', 'Quantity', 'Amount'],

      cartGetters,

      processOrder,
      removeCartItem,
      loading,
      checkoutDataComposablesLoading,

      personalDetails,

      shippingDetails,
      shippingName,
      shippingPrice,
      formattedShippingPrice,

      billingDetails,
      billingSameAsShipping,

      paymentProvider: paymentProvider.state,

      vouchers,
      giftCards,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
}
.table {
  margin: 0 0 var(--spacer-base) 0;
  &__row {
    justify-content: space-between;
  }
  &__remove {
    align-self: center;
  }
  @include for-desktop {
    &__header {
      text-align: center;
      &:last-child {
        text-align: right;
      }
    }
    &__data {
      text-align: center;
    }
    &__description {
      text-align: left;
      flex: 0 0 16rem;
    }
    &__image {
      --image-width: 5.125rem;
      text-align: left;
      flex: 0 0 7rem;
      padding-right: var(--spacer-base);
    }
  }
}
.product-sku {
  color: var(--c-text-muted);
  font-size: var(--font-size--sm);
}
.price {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.product-price {
  --price-font-size: var(--font-size--base);
}
.product-attributes {
  padding-top: var(--spacer-base);
}
.summary {
  &__terms {
    margin: var(--spacer-base) 0 0 0;
  }
  &__total {
    margin: 0 0 var(--spacer-sm) 0;
    flex: 0 0 16.875rem;
  }
  &__action {
    @include for-desktop {
      display: flex;
      margin: var(--spacer-xl) 0 0 0;
    }
  }
  &__action-button {
    margin: 0;
    width: 100%;
    margin: var(--spacer-sm) 0 0 0;
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
      width: auto;
    }
    &--secondary {
      @include for-desktop {
        text-align: right;
      }
    }
  }
  &__back-button {
    margin: var(--spacer-sm) 0 var(--spacer-xl);
    width: 100%;
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
      width: auto;
    }
  }
  &__property-total {
    margin: var(--spacer-xl) 0;
  }
}
.property {
  margin: 0 0 var(--spacer-sm) 0;
  &__name {
    color: var(--c-text-muted);
  }
}
.accordion {
  margin: 0 0 var(--spacer-xl) 0;
  &__item {
    display: flex;
    align-items: flex-start;
  }
  &__content {
    flex: 1;
  }
  &__edit {
    flex: unset;
  }
}
.content {
  margin: 0 0 var(--spacer-xl) 0;
  color: var(--c-text);
  &:last-child {
    margin: 0;
  }
  &__label {
    font-weight: var(--font-weight--normal);
  }
}
.divider {
  --divider-border-color: var(--c-primary);
  --divider-width: 100%;
  --divider-margin: 0 0 var(--spacer-base) 0;
}

.payment-divider {
  margin: var(--spacer-xl) 0 0 0;
}

.info {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.875rem;

  &__item {
    display: flex;
    align-items: flex-start;
    flex-grow: 1;
    padding: 1.25rem;
    margin-bottom: 0.9375rem;
    background: #F5F5F5;
    box-sizing: border-box;

    &--half {
      @media (min-width: $tablet-min) {
        width: 50%;
      }
    }
  }

  &__col {
    &--title {
      padding-right: 0.5rem;
    }

    &--content {
      color: #8F8F8F;
    }

    &--right {
      margin-left: auto;
    }
  }
}

.shipping-title {
  display: flex;
  align-items: center;
  color: #000;
  font-family: var(--font-family--primary);
  font-weight: bold;
  margin-bottom: 10px;

  & > div {
    &:first-child {
      margin-right: 10px;
    }
  }
}
</style>
