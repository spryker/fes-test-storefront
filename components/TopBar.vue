<template>
  <SfTopBar data-cy="svsf-topBar-bar">
    <template #center>
      <div class="center-wrapper" v-if="!routerHelpers.isCheckout($route.path)">
        <span class="container static"><SfIcon :icon="checkIcon.path" :class="checkIcon.class" :viewBox="checkIcon.viewBox"/><p>Free Delivery & Returns</p></span>
        <span class="container static"><SfIcon :icon="checkIcon.path" :class="checkIcon.class" :viewBox="checkIcon.viewBox"/><p>100 Day Returns Policy</p></span>
        <span class="container static"><SfIcon :icon="checkIcon.path" :class="checkIcon.class" :viewBox="checkIcon.viewBox"/><p>Another use of your shop</p></span>
        <span class="container"><SfIcon icon="phone" size="15px"/><p>+49 (0) 800 541 214 98</p></span>
        <div class="container">
          <SfButton class="container__button container__button--selected">
            Gross Prices
            <SfIcon :icon="arrowIcon.path" :class="arrowIcon.class" :viewBox="arrowIcon.viewBox"/>
          </SfButton>
        </div>
        <CurrencySelector data-cy="svsf-topBar-currencySelector" />
        <LocaleSelector data-cy="svsf-topBar-localeSelector" />
        <div class="container">
          <SfButton class="container__button container__button--selected">
            My Company
            <SfIcon :icon="arrowIcon.path" :class="arrowIcon.class" :viewBox="arrowIcon.viewBox"/>
          </SfButton>
        </div>
      </div>
    </template>
  </SfTopBar>
</template>

<script>
import { SfButton, SfIcon, SfTopBar } from '@storefront-ui/vue';
import { useUiState } from '~/composables';
import { useUser, userGetters } from '@spryker-vsf/composables';
import CurrencySelector from './CurrencySelector';
import LocaleSelector from './LocaleSelector';
import routerHelpers from '~/helpers/router';
import { arrowIcon, checkIcon } from '~/assets/icons';

export default {
  components: { SfTopBar, SfIcon, SfButton, LocaleSelector, CurrencySelector },
  setup() {
    const { toggleModal } = useUiState();
    const { isAuthenticated, logout, user } = useUser();

    return {
      toggleModal,
      isAuthenticated,
      logout,
      user,
      userGetters,
      routerHelpers,
      arrowIcon,
      checkIcon
    };
  },
};
</script>
<style lang="scss" scoped>
@import '~assets/topbar-button';

.topbar {
  &__button {
    margin: 0 0 0 var(--spacer-xs);
  }
}

.center-wrapper {
  display: inherit;
  gap: 30px;
}

.container {
  text-transform: uppercase;
  font-size: 12px;
  gap: 8px;
}

.static {
  --icon-color: #8e9194;
  color: var(--icon-color);
}
</style>
