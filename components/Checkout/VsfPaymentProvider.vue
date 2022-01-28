<template>
  <div class="payment">
    <SfHeading
      data-cy="svsf-vsfPaymentProvider-heading"
      :level="3"
      :title="$t('Payment')"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <template v-for="(method, index) in paymentMethods.list">
      <div :key="index" class="sf-radio__wrapper" v-bind:class="{ 'is-active': paymentProviderGetters.getSelected(paymentMethods) === paymentProviderGetters.getMethodName(method) }">
        <SfRadio
          :data-cy="`svsf-vsfPaymentProvider-paymentMethods-radio-${index}`"
          :label="paymentProviderGetters.getMethodName(method)"
          :value="paymentProviderGetters.getMethodName(method)"
          :description="paymentProviderGetters.getMethodDescription(method)"
          :selected="paymentProviderGetters.getSelected(paymentMethods)"
          name="paymentMethod"
          class="form__radio payment"
          @input="selectMethod(method)"
        >
        <template #description>
          <SfImage
            :src="`/icons/${paymentProviderGetters.getMethodName(method).toLowerCase().split(' ').join('_')}.svg`"
            alt="Edit"
            class="sf-radio__image"
          />
        </template>
      </SfRadio>
      <div v-if="paymentProviderGetters.getMethodName(method) === 'Invoice'">
        <InvoiceFormMock
          class="form__wrapper"
          data-cy="svsf-vsfPaymentProvider-invoice-form"
          v-show="isInvoice"
          @save="savePaymentDetails"
        />
      </div>
      <div v-if="paymentProviderGetters.getMethodName(method) === 'Credit Card'">
        <CreditCardFormMock
          class="form__wrapper"
          data-cy="svsf-vsfPaymentProvider-creditCard-form"
          v-show="isCreditCard"
          @save="savePaymentDetails"
        />
      </div>
      </div>
    </template>
  </div>
</template>

<script>
import {
  SfHeading,
  SfButton,
  SfRadio,
  SfDivider,
  SfInput,
  SfSelect,
  SfImage,
} from '@storefront-ui/vue';
import {
  usePaymentProvider,
  paymentProviderGetters,
} from '@spryker-vsf/composables';
import CreditCardFormMock from '@/components/Checkout/CreditCardFormMock';
import InvoiceFormMock from '@/components/Checkout/InvoiceFormMock';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { ref, computed, onBeforeMount } from '@vue/composition-api';

export default {
  name: 'VsfPaymentProvider',

  components: {
    SfHeading,
    SfButton,
    SfRadio,
    SfDivider,
    SfInput,
    SfSelect,
    SfImage,
    CreditCardFormMock,
    InvoiceFormMock,
    ValidationObserver,
    ValidationProvider,
  },

  setup(props, { emit, root }) {
    const { load, save, state: paymentMethods, loading } = usePaymentProvider();

    const { paymentMethodValidator } = root.$refs;

    const savedData = {};
    const selectedPaymentMethod = ref(null);

    const selectMethod = async (method) => {
      const methodName = paymentProviderGetters.getMethodName(method);
      selectedPaymentMethod.value = method;

      await save({
        paymentMethod: method,
      });
      emit('status', !!savedData[methodName]);
    };

    const savePaymentDetails = async (paymentDetails) => {
      const type = paymentProviderGetters.getSelected(paymentMethods.value);
      savedData[type] = paymentDetails;

      // do something with paymentDetails
      // await persistPaymentDetails(paymentDetails);
      emit('status', true, paymentDetails, savedData);
    };

    // TODO: re-enable once server side persistence is implemented
    // onSSR(async () => {
    //   await load();
    // });

    onBeforeMount(async () => {
      await load();
    });

    const isCreditCard = computed(
      () =>
        paymentProviderGetters.getSelected(paymentMethods.value) ===
        'Credit Card',
    );
    const isInvoice = computed(
      () =>
        paymentProviderGetters.getSelected(paymentMethods.value) === 'Invoice',
    );

    return {
      loading,
      paymentMethods,
      selectMethod,
      selectedPaymentMethod,
      savePaymentDetails,
      paymentProviderGetters,
      isCreditCard,
      isInvoice,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 1rem;

  ::v-deep {
    h3 {
      color: #2F2F2F;
      font-weight: normal;
    }
  }
}

.payment {
  &__label {
    display: flex;
    justify-content: space-between;
  }

  &__description {
    --radio-description-margin: 0;
    --radio-description-font-size: var(--font-xs);
  }
}
.form {
  &--payment {
    width: 100%;
    margin: 0;
  }
  &__wrapper {
    margin-top: 1rem;
  }
  &__select {
    --select-option-font-size: var(--font-size--lg);
    ::v-deep .sf-select__dropdown {
      font-size: var(--font-size--lg);
      margin: 0;
      font-family: var(--font-family--secondary);
      font-weight: var(--font-weight--normal);
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__element {
    margin: 0 0 var(--spacer-sm);
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 calc(50% - var(--spacer-xl));
        margin-right: calc(var(--spacer-xl) / 2);
      }
      &-even {
        @include for-desktop {
          margin-left: calc(var(--spacer-xl) / 2);
          margin-right: 0;
        }
      }
    }
  }
  &__group {
    display: flex;
    align-items: center;
  }
  &__action {
    @include for-desktop {
      flex: 0 0 100%;
      display: flex;
    }
  }
  &__action-button,
  &__back-button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: auto;
    }
  }
  &__action-button {
    margin: 0 var(--spacer-xl) 0 0;

    &--margin-bottom {
      margin: 0 0 var(--spacer-xl);
    }
  }
  &__back-button {
    margin: 0 0 var(--spacer-sm) 0;
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
  &__radio-group {
    flex: 0 0 100%;
    margin: 0 0 var(--spacer-2xl) 0;
  }
}

.sf-radio {
  position: relative;
  color: #8f8f8f;
  transition: color 0.25s cubic-bezier(1, 0.5, 0.8, 1);

  &:hover {
    color: #2F2F2F;
  }

  &.is-active {
    background: transparent;
    color: #2F2F2F;
  }

  &__image {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
  }

  &__wrapper {
    padding: 1.5625rem 1.25rem;
    margin-bottom: 0.8375rem;
    border: 1px solid #dce0e5;
    border-radius: 2px;

    &.is-active {
      background: transparent;
      color: #2F2F2F;
      border-color: var(--c-primary);
    }
  }

  ::v-deep {
    .sf-radio {
      &__checkmark {
        width: 1.25rem;
        height: 1.25rem;
        border: solid #B2B2B2;
        border: var(--radio-checkmark-border, var(--radio-checkmark-border-style, solid) var(--radio-checkmark-border-color, #B2B2B2));
        border-width: 2px;
        border-width: var(--radio-checkmark-border-width, 2px);
        border-radius: 100%;

        &.is-active {
          --radio-checkmark-border-width: 0.375rem;
          --radio-checkmark-border-color: var(--c-primary);
        }
      }

      &__container {
        padding: 0;
      }

      &__content {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
