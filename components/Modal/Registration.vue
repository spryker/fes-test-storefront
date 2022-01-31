<template>
  <div>
    <div class="modal__title">
      <span class="modal__title-text">{{ $t('register') }}</span>
    </div>
    <ValidationObserver v-slot="{ handleSubmit }" key="sign-up">
      <form
        class="form form__registration"
        data-cy="svsf-registrationPopUp-form"
        @submit.prevent="handleSubmit(handleRegister)"
        autocomplete="off"
      >
        <div class="name-inputs">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <SfInput
              data-cy="svsf-registrationPopUp-firstName-input"
              v-model="form.firstName"
              :valid="!errors[0] && !registerErrors.field.firstName"
              :errorMessage="errors[0] || registerErrors.field.firstName"
              name="first-name"
              :label="$t('First Name')"
              class="form__element"
              required
            />
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <SfInput
              data-cy="svsf-registrationPopUp-lastName-input"
              v-model="form.lastName"
              :valid="!errors[0] && !registerErrors.field.lastName"
              :errorMessage="errors[0] || registerErrors.field.lastName"
              name="last-name"
              :label="$t('Last Name')"
              class="form__element"
              required
            />
          </ValidationProvider>
        </div>
        <ValidationProvider rules="required|email" v-slot="{ errors }">
          <SfInput
            data-cy="svsf-registrationPopUp-email-input"
            v-model="form.email"
            :valid="!errors[0] && !registerErrors.field.email"
            :errorMessage="errors[0] || registerErrors.field.email"
            name="email"
            :label="$t('email')"
            class="form__element"
            required
          />
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <SfSelect
            data-cy="svsf-registrationPopUp-salutation-select"
            v-model="form.salutation"
            :valid="!errors[0] && !registerErrors.field.salutation"
            :errorMessage="errors[0] || registerErrors.field.salutation"
            name="salutation"
            :label="$t('Salutation')"
            class="form__element form__select sf-select--underlined"
            required
          >
            <SfSelectOption
              v-for="option in salutations"
              :key="option"
              :value="option"
              :name="option"
              >{{ option }}</SfSelectOption
            >
          </SfSelect>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <SfInput
            data-cy="svsf-registrationPopUp-password-input"
            v-model="form.password"
            :valid="!errors[0] && !registerErrors.field.password"
            :errorMessage="errors[0] || registerErrors.field.password"
            name="password"
            :label="$t('Password')"
            type="password"
            class="form__element"
            required
          />
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <SfInput
            data-cy="svsf-registrationPopUp-confirmPassword-input"
            v-model="form.confirmPassword"
            :valid="!errors[0] && !registerErrors.field.confirmPassword"
            :errorMessage="errors[0] || registerErrors.field.confirmPassword"
            name="confirm-password"
            :label="$t('Confirm password')"
            type="password"
            class="form__element"
            required
          />
        </ValidationProvider>
        <ValidationProvider
          :rules="{ required: { allowFalse: false } }"
          v-slot="{ errors }"
        >
          <div class="accept_terms__wrapper">
            <SfCheckbox
              data-cy="svsf-registrationPopUp-acceptedTerms-checkbox"
              v-model="acceptedTerms"
              :valid="!errors[0]"
              :errorMessage="errors[0]"
              name="accepted-terms"
              :label="$t('I accept')"
              class="form__element"
            />
            <SfLink
              class="accept_terms__link text-green text-no-decoration"
              href="#"
            >
              {{ $t('terms') }}</SfLink
            >
          </div>
        </ValidationProvider>
        <div
          data-cy="svsf-registrationPopUp-error-message"
          class="error-log"
          v-if="registerErrors.form.length > 0"
        >
          <p v-for="(error, index) in registerErrors.form" :key="index">
            {{ error }}
          </p>
        </div>
        <SfButton
          data-cy="svsf-registrationPopUp-submit-button"
          type="submit"
          class="sf-button--full-width form__button"
          :disabled="loading"
        >
          <SfLoader :class="{ loader: loading }" :loading="loading">
            <div>{{ $t('Create an account') }}</div>
          </SfLoader>
        </SfButton>
      </form>
    </ValidationObserver>
    <div class="bottom">
      <span class="bottom__before-action-text">{{ $t('have_account') }}</span>
      <SfButton
        data-cy="svsf-registrationPopUp-loginPopUp-button"
        class="sf-button--text bottom__action text-green text-no-decoration"
        @click="toggleLogin"
        >{{ `${$t('Login')}.` }}</SfButton
      >
    </div>
  </div>
</template>

<script>
import {
  SfInput,
  SfButton,
  SfCheckbox,
  SfLink,
  SfLoader,
  SfSelect,
} from '@storefront-ui/vue';
import { ref, watch } from '@vue/composition-api';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import {
  useUser,
  userGetters,
  useUserRegistrationConfirmation,
} from '@spryker-vsf/composables';
import { getSalutation } from '~/helpers/user';
import { useModalState } from '~/composables';

export default {
  name: 'Registration',
  components: {
    SfInput,
    SfButton,
    SfCheckbox,
    SfLink,
    SfLoader,
    ValidationProvider,
    ValidationObserver,
    SfSelect,
  },
  setup() {
    const { register, error, loading } = useUser();
    const { required } = useUserRegistrationConfirmation();
    const { toggleLogin, toggleRegistrationConfirmationRequired } =
      useModalState();

    const form = ref({});
    const registerErrors = ref(userGetters.mapAuthErrors(null));
    const acceptedTerms = ref(false);
    const salutations = ref(getSalutation());

    watch(required, () => {
      required.value && toggleRegistrationConfirmationRequired();
    });

    function assignErrors(errors) {
      registerErrors.value = userGetters.mapAuthErrors(errors);
    }

    function handleForm(func) {
      return async () => {
        await func();
      };
    }

    const handleRegister = handleForm(async () => {
      assignErrors();
      await register({
        user: {
          ...form.value,
          acceptedTerms: acceptedTerms.value,
        },
      });
      assignErrors(error.value?.register);
    });

    return {
      form,
      registerErrors,
      acceptedTerms,
      salutations,
      handleRegister,
      loading,
      toggleLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/modal';

.form {
  margin: 20px;

  .name-inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .accept_terms {
    &__wrapper {
      display: flex;
      flex-direction: row;
    }

    &__link {
      margin: 1px 0 0 5px;
      font-size: var(--font-size--base);
    }
  }
}
</style>
