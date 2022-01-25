<template>
  <div class="container">
    <SfButton
      data-cy="svsf-currencySelector-openPopUp-button"
      class="container__button container__button--selected"
      @click="isCurModalOpen = !isCurModalOpen"
    >
      {{ currency.selected }}
      <SfIcon :icon="arrowIcon.path" :class="arrowIcon.class" :viewBox="arrowIcon.viewBox"/>
    </SfButton>
    <SfBottomModal
      data-cy="svsf-currencySelector-modal"
      :is-open="isCurModalOpen"
      :title="$t('Choose currency')"
      @click:close="isCurModalOpen = !isCurModalOpen"
    >
      <SfList>
        <SfListItem
          :data-cy="`svsf-currencySelector-currency-${curr.name}`"
          v-for="curr in currency.options"
          :key="curr.name"
        >
          <a
            href="#"
            :data-cy="`svsf-currencySelector-currency-${curr.name}-link`"
            @click.prevent="setCurrency(curr.name)"
          >
            <SfCharacteristic
              :data-cy="`svsf-currencySelector-currency-${curr.name}-characteristic`"
              class="language"
            >
              <template #title>
                <span
                  :data-cy="`svsf-currencySelector-currency-${curr.name}-label`"
                  >{{ curr.label }}</span
                >
              </template>
            </SfCharacteristic>
          </a>
        </SfListItem>
      </SfList>
    </SfBottomModal>
  </div>
</template>

<script>
import {
  SfImage,
  SfIcon,
  SfSelect,
  SfButton,
  SfList,
  SfBottomModal,
  SfCharacteristic,
} from '@storefront-ui/vue';
import { ref } from '@vue/composition-api';
import { useCurrency } from '@spryker-vsf/composables';
import { onSSR } from '@vue-storefront/core';
import { arrowIcon } from '~/assets/icons';

export default {
  components: {
    SfImage,
    SfIcon,
    SfSelect,
    SfButton,
    SfList,
    SfBottomModal,
    SfCharacteristic,
  },
  setup(props, context) {
    const { currency, load, setCurrency } = useCurrency();
    const isCurModalOpen = ref(false);

    onSSR(async () => {
      await load();
    });

    return {
      currency,
      isCurModalOpen,
      setCurrency,
      arrowIcon
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/topbar-button';

.container {
  .sf-bottom-modal {
    z-index: 2;
    left: 0;
    @include for-desktop {
      --bottom-modal-height: 100vh;
    }
  }

  .sf-list {
    .language {
      padding: var(--spacer-sm) 0;
    }

    @include for-desktop {
      display: flex;
    }

    .sf-image {
      --image-width: 20px;
      margin-right: 1rem;
      border: 1px solid var(--c-light);
      border-radius: 50%;
    }
  }
}
</style>
