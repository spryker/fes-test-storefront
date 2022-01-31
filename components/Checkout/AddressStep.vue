<template>
  <ValidationObserver v-slot="{ invalid }">
    <SfHeading
      data-cy="svsf-addressStepForm-heading"
      :level="3"
      :title="type === 'shipping' ? $t('Shipping') : $t('Billing')"
      class="sf-heading--left sf-heading--no-underline title"
    />

    <DropdownRadio
      v-for="{ value, label } in options"
      :key="value"
      :label="label"
      :value="value"
      :selected="selectedOption"
      :disabled="isDropdownRadioDisabled(value)"
      @input="selectOption"
    >
      <UserCheckoutAddresses
        data-cy="svsf-addressStepForm-userCheckoutAddresses-list"
        v-if="value === values.selectAddress"
        v-model="setAsDefault"
        :currentAddressId="currentAddressId"
        @setCurrentAddress="handleSetCurrentAddress"
      />

      <div class="form address-form" v-if="value === values.newAddress">
        <div class="form__row">
          <ValidationProvider
            name="firstName"
            rules="required|min:2"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              data-cy="svsf-addressStepForm-firstName-input"
              v-model="newAddress.firstName"
              :label="$t('First name')"
              name="firstName"
              class="form__element"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
              @input="changeShipmentProviderStatus"
            />
          </ValidationProvider>
          <ValidationProvider
            name="lastName"
            rules="required|min:2"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              data-cy="svsf-addressStepForm-lastName-input"
              v-model="newAddress.lastName"
              :label="$t('Last name')"
              name="lastName"
              class="form__element"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
              @input="changeShipmentProviderStatus"
            />
          </ValidationProvider>
        </div>
        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          class="form__element"
          slim
        >
          <SfSelect
            data-cy="svsf-addressStepForm-salutation-select"
            v-model="newAddress.salutation"
            name="salutation"
            :label="$t('Salutation')"
            class="form__select sf-select--underlined"
            :valid="!errors[0]"
            :errorMessage="errors[0]"
            required
            @input="changeShipmentProviderStatus"
          >
            <SfSelectOption
              v-for="salutation in salutations"
              :key="salutation"
              :value="salutation"
              :name="salutation"
              >{{ salutation }}</SfSelectOption
            >
          </SfSelect>
        </ValidationProvider>
        <ValidationProvider
          name="country"
          rules="required|min:2"
          v-slot="{ errors }"
          slim
        >
          <SfSelect
            data-cy="svsf-addressStepForm-country-select"
            v-model="newAddress.iso2Code"
            :label="$t('Country')"
            name="country"
            class="form__element form__select sf-select--underlined"
            required
            :valid="!errors[0]"
            :errorMessage="errors[0]"
            @input="changeShipmentProviderStatus"
          >
            <SfSelectOption
              v-for="{ name, code } in countries"
              :key="code"
              :value="code"
              :name="name"
            >
              {{ name }}
            </SfSelectOption>
          </SfSelect>
        </ValidationProvider>

        <div class="form__row">
          <ValidationProvider
            name="address1"
            rules="required"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              data-cy="svsf-addressStepForm-address1-input"
              v-model="newAddress.address1"
              :label="$t('Street name')"
              name="address1"
              class="form__element address-input"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
              @input="changeShipmentProviderStatus"
            />
          </ValidationProvider>
          <ValidationProvider
            name="address2"
            rules="required"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              data-cy="svsf-addressStepForm-address2-input"
              v-model="newAddress.address2"
              :label="$t('House/Apartment number')"
              name="address2"
              class="form__element"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
              @input="changeShipmentProviderStatus"
            />
          </ValidationProvider>
        </div>

        <div class="form__row">
          <ValidationProvider
            name="city"
            rules="required|min:3"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              data-cy="svsf-addressStepForm-city-input"
              v-model="newAddress.city"
              :label="$t('City')"
              name="city"
              class="form__element"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
              @input="changeShipmentProviderStatus"
            />
          </ValidationProvider>
          <ValidationProvider name="state" slim>
            <SfInput
              data-cy="svsf-addressStepForm-state-input"
              v-model="newAddress.state"
              :label="$t('State/Province')"
              name="state"
              class="form__element"
              @input="changeShipmentProviderStatus"
            />
          </ValidationProvider>
          <ValidationProvider
            name="zipCode"
            rules="required|min:2"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              data-cy="svsf-addressStepForm-zipCode-input"
              v-model="newAddress.zipCode"
              :label="$t('Zip-code')"
              name="zipCode"
              class="form__element"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
              @input="changeShipmentProviderStatus"
            />
          </ValidationProvider>
        </div>

        <SfInput
          data-cy="svsf-addressStepForm-phone-input"
          v-model="newAddress.phone"
          :label="$t('Phone number')"
          name="phone"
          class="form__element"
          @input="changeShipmentProviderStatus"
        />
      </div>
    </DropdownRadio>

    <template v-if="type === 'shipping'">
      <div class="form">
        <div class="form__action">
          <SfButton
            data-cy="svsf-addressStepForm-shippingMerhods-button"
            :disabled="
              invalid ||
              (isAuthenticated && !canAddNewAddress && !currentAddressId)
            "
            class="form__action-button form__action-button--margin-bottom"
            @click="moveToShipmentProvider"
          >
            {{ $t('Select shipping method') }}
          </SfButton>
        </div>
      </div>
      <VsfShippingProvider
        data-cy="svsf-addressStepForm-vsfShippingProvider-list"
        v-show="canMoveToShipmentProvider"
        @submit="$router.push('/checkout/billing')"
      />
    </template>
    <template v-else-if="type === 'billing'">
      <SfButton
        data-cy="svsf-addressStepForm-moveToPayment-button"
        :disabled="
          invalid || (isAuthenticated && !canAddNewAddress && !currentAddressId)
        "
        class="form__action-button"
        @click="moveToPayment"
      >
        {{ $t('Continue to payment') }}
      </SfButton>
      <NuxtLink to="/checkout/shipping">
        <SfButton
          data-cy="svsf-addressStepForm-back-button"
          class="
            sf-button
            form__action-button
            sf-button--underlined
            form__back-button
            smartphone-only
          "
        >
          {{ $t('Go back') }}
        </SfButton>
      </NuxtLink>
    </template>
  </ValidationObserver>
</template>

<script>
import {
  SfHeading,
  SfInput,
  SfButton,
  SfSelect,
  SfCheckbox,
} from '@storefront-ui/vue';
import {
  ref,
  watch,
  computed,
  onMounted,
  onBeforeMount,
} from '@vue/composition-api';
import {
  useShipping,
  useBilling,
  useUser,
  useUserShipping,
  userShippingGetters,
  useTax,
} from '@spryker-vsf/composables';
import { min } from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

import DropdownRadio from '~/components/DropdownRadio';

import { getCountries, getCountryCodes } from '~/helpers/user-address';
import { getSalutation } from '~/helpers/user';

extend('min', {
  ...min,
});

const NOT_SELECTED_ADDRESS = '';

const GENERIC_ADDRESSES_COMPONENT_TYPES = ['shipping', 'billing'];

const optionsValues = {
  selectAddress: 'selectAddress',
  newAddress: 'newAddress',
  multipleAddresses: 'multipleAddresses',
  sameAsShipping: 'sameAsShipping',
};

export default {
  name: 'AddressStep',
  props: {
    type: {
      required: true,
      validator: (value) => GENERIC_ADDRESSES_COMPONENT_TYPES.includes(value),
    },
  },
  components: {
    DropdownRadio,
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfCheckbox,
    ValidationProvider,
    ValidationObserver,
    VsfShippingProvider: () =>
      import('~/components/Checkout/VsfShippingProvider'),
    UserCheckoutAddresses: () =>
      import('~/components/Checkout/UserCheckoutAddresses'),
  },
  setup({ type }, context) {
    const composables = {
      shipping: useShipping,
      billing: useBilling,
    };

    const savePropertiesNames = {
      shipping: 'shippingDetails',
      billing: 'billingDetails',
    };

    const isDefaultPropertyName = {
      shipping: 'isDefaultShipping',
      billing: 'isDefaultBilling',
    };

    const { [type]: address, load, save } = composables[type]();
    const { load: loadTaxes } = useTax();

    const { isAuthenticated } = useUser();
    const {
      shipping: userShipping,
      load: loadUserShipping,
      loading: userShippingLoading,
    } = useUserShipping();
    const newAddress = ref({});

    const salutations = ref(['', ...getSalutation()]);
    const countries = ref([{ name: '', code: '' }, ...getCountries()]);

    const hasSavedShippingAddress = computed(() => {
      const addresses = userShippingGetters.getAddresses(userShipping.value);
      return Boolean(addresses?.length);
    });
    const currentAddressId = ref(NOT_SELECTED_ADDRESS);
    const setAsDefault = ref(false);
    const predefinedAddress = ref({});
    const canAddNewAddress = ref(true);
    const canMoveToShipmentProvider = ref(false);
    const codes = getCountryCodes();

    const adjustDetails = (address) => ({
      ...address,
      id: address.id,
      country: codes[address.iso2Code],
      [isDefaultPropertyName[type]]: setAsDefault.value,
    });

    const handleSetCurrentAddress = (address) => {
      predefinedAddress.value = { ...address };
      currentAddressId.value = address.id;
      canAddNewAddress.value = false;
      canMoveToShipmentProvider.value = false;
    };

    const { shipping } = useShipping();

    const saveCurrentAddress = async () => {
      let valueToAdjust;

      if (sameAsShipping.value) {
        valueToAdjust = { ...shipping.value };
      } else {
        valueToAdjust = canAddNewAddress.value
          ? newAddress.value
          : predefinedAddress.value;
      }

      const details = adjustDetails(valueToAdjust);

      await save({ [savePropertiesNames[type]]: details });
      await loadTaxes({ shippingAddress: address.value });
    };

    const moveToShipmentProvider = async () => {
      await saveCurrentAddress();

      canMoveToShipmentProvider.value = true;
    };

    const moveToPayment = async () => {
      await saveCurrentAddress();
      context.root.$router.push('/checkout/payment');
    };

    const selectDefaultAddress = () => {
      if (!isAuthenticated.value) {
        canAddNewAddress.value = true;

        return;
      }

      const currentAddress = userShippingGetters.getAddresses(
        userShipping.value,
        { [isDefaultPropertyName[type]]: true },
      );

      if (!currentAddress?.length) {
        return;
      }

      const selectedAddress = {
        id: userShippingGetters.getId(currentAddress[0]),
        ...currentAddress[0].attributes,
      };

      handleSetCurrentAddress(selectedAddress);
    };

    const setData = (addr) => {
      if (!addr || !Object.keys(addr).length) {
        selectDefaultAddress();

        return;
      }

      if (!addr.id) {
        newAddress.value = { ...addr };
        canAddNewAddress.value = true;
        currentAddressId.value = NOT_SELECTED_ADDRESS;
        canMoveToShipmentProvider.value = true;

        return;
      }

      predefinedAddress.value = { ...addr };
      canAddNewAddress.value = false;
      currentAddressId.value = addr.id;
      canMoveToShipmentProvider.value = true;

      handleSetCurrentAddress(addr);
    };

    const changeShipmentProviderStatus = () => {
      canMoveToShipmentProvider.value = false;
    };

    {
      // select default address once userShipping is done loading
      const unwatch = watch(userShippingLoading, (newValue, oldValue) => {
        if (!newValue && newValue !== oldValue) {
          selectDefaultAddress();
          unwatch();
        }
      });
    }

    // When customer signs in load save addresses
    // and set default address
    watch(isAuthenticated, async (newValue, oldValue) => {
      if (newValue && newValue !== oldValue) {
        await loadUserShipping();
        setData(address.value);
      }
    });

    onBeforeMount(async () => {
      await load();

      // shouldn't there be `isAuthenticated.value` for proper work?
      if (isAuthenticated) {
        await loadUserShipping();
      }
    });

    onMounted(async () => {
      setData(address.value);
    });

    const syncSetAsDefault = () => {
      setAsDefault.value = Boolean(address.value?.isDefaultShipping);
    };
    syncSetAsDefault();

    watch(address, (addr) => {
      setData(addr);
      syncSetAsDefault();
    });

    const deliveryOptions = ref([
      {
        label: 'Select address from address book',
        value: optionsValues.selectAddress,
      },
      { label: 'Define new address', value: optionsValues.newAddress },
      // Can't find multiple addresses functionality
      // {
      //   label: 'Deliver to multiple addresses',
      //   value: optionsValues.multipleAddresses,
      // },
    ]);
    const selectedDeliveryOption = ref(
      isAuthenticated.value && hasSavedShippingAddress.value
        ? optionsValues.selectAddress
        : optionsValues.newAddress,
    );
    const selectDeliveryOption = (newOption) => {
      selectedDeliveryOption.value = newOption;
    };

    const billingOptions = ref([
      { label: 'Same as shipping', value: optionsValues.sameAsShipping },
      {
        label: 'Select address from address book',
        value: optionsValues.selectAddress,
      },
      { label: 'Define new address', value: optionsValues.newAddress },
    ]);
    const selectedBillingOption = ref(
      isAuthenticated.value || hasSavedShippingAddress.value
        ? ''
        : optionsValues.newAddress,
    );
    const selectBillingOption = (newOption) => {
      selectedBillingOption.value = newOption;
    };

    const values = ref(optionsValues);
    const options = type === 'billing' ? billingOptions : deliveryOptions;
    const selectedOption =
      type === 'billing' ? selectedBillingOption : selectedDeliveryOption;
    const selectOption =
      type === 'billing' ? selectBillingOption : selectDeliveryOption;
    const sameAsShipping = computed(
      () => selectedOption.value === optionsValues.sameAsShipping,
    );
    const isDropdownRadioDisabled = (value) => {
      if (value === optionsValues.selectAddress) {
        return !isAuthenticated.value || !hasSavedShippingAddress.value;
      }
      if (value === optionsValues.newAddress) {
        return !canAddNewAddress;
      }
    };

    watch(selectedOption, (option) => {
      if (option === optionsValues.newAddress) {
        currentAddressId.value = NOT_SELECTED_ADDRESS;
        canAddNewAddress.value = true;
        canMoveToShipmentProvider.value = false;
      }
    });

    return {
      moveToShipmentProvider,
      moveToPayment,

      salutations,
      countries,
      isAuthenticated,
      newAddress,
      canAddNewAddress,

      hasSavedShippingAddress,
      currentAddressId,
      setAsDefault,
      handleSetCurrentAddress,

      canMoveToShipmentProvider,
      changeShipmentProviderStatus,
      sameAsShipping,

      values,
      options,
      selectedOption,
      selectOption,
      isDropdownRadioDisabled,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  --button-width: 100%;

  padding-top: 25px;

  @include for-desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
    --button-width: auto;
  }
  &__row {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .form__element {
      margin-right: 20px;

      &.address-input {
        width: 210%;
      }
    }

    .form__element:last-child {
      margin-right: 0;
    }
  }
  &__element {
    margin: 0 0 var(--spacer-xl) 0;
    width: 100%;
  }
  &__action {
    @include for-desktop {
      flex: 0 0 100%;
      display: flex;
    }
  }
  &__action-button {
    width: 100%;
    @include for-desktop {
      width: 25rem;
    }
    &--add-address {
      width: 100%;
      margin: 0 0 var(--spacer-sm) 0;
      @include for-desktop {
        margin: 0 0 var(--spacer-lg) 0;
        width: auto;
      }
    }
  }
  &__back-button {
    width: 100%;
    margin: var(--spacer-sm) 0 var(--spacer-xl);
    &:hover {
      color: white;
    }
  }
}
.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
}
</style>

<style lang="scss">
@import 'assets/fields';

.address-form {
  @extend %fields;
}
</style>
