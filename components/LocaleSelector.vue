<template>
  <div class="container">
    <SfButton
      class="container__lang container__lang--selected"
      @click="isLangModalOpen = !isLangModalOpen"
    >
      <SfImage :src="`/icons/langs/${locale}.webp`" width="20" alt="Flag" />
    </SfButton>
    <SfBottomModal
      :is-open="isLangModalOpen"
      title="Choose language"
      @click:close="isLangModalOpen = !isLangModalOpen"
    >
      <SfList>
        <SfListItem v-for="lang in availableLocales" :key="lang.code">
          <a
            :href="switchLocalePath(lang.code)"
            @click.prevent="setLocale(lang.code, switchLocalePath(lang.code))"
          >
            <SfCharacteristic class="language">
              <template #title>
                <span>{{ lang.label }}</span>
              </template>
              <template #icon>
                <SfImage
                  :src="`/icons/langs/${lang.code}.webp`"
                  width="20"
                  alt="Flag"
                  class="language__flag"
                />
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
  SfSelect,
  SfButton,
  SfList,
  SfBottomModal,
  SfCharacteristic,
} from '@storefront-ui/vue';
import { ref, computed } from '@vue/composition-api';
import { useLocale } from '@spryker-vsf/composables';

export default {
  components: {
    SfImage,
    SfSelect,
    SfButton,
    SfList,
    SfBottomModal,
    SfCharacteristic,
  },

  setup(props, context) {
    const { locales } = useLocale();
    const { locale } = context.root.$i18n;
    const isLangModalOpen = ref(false);
    const availableLocales = computed(() =>
      locales.value.filter((i) => i.code !== locale),
    );

    const setLocale = async (locale, url) => {
      await context.root.$i18n.setLocale(locale);

      /**
       * Due to undefined cause,
       * this way of reloading the page provides the expected behavior
       * for locale change.
       */
      window.location.href = `${window.location.origin}${url}`;
    };

    return {
      setLocale,
      availableLocales,
      locale,
      isLangModalOpen,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 -5px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  .sf-bottom-modal {
    z-index: 2;
    left: 0;
    @include for-desktop {
      --bottom-modal-height: 100vh;
    }
  }
  .sf-list {
    .language {
      padding: var(--spacer-sm);
      &__flag {
        margin-right: var(--spacer-sm);
      }
    }
    @include for-desktop {
      display: flex;
    }
  }
  &__lang {
    width: 20px;
    --button-box-shadow: none;
    background: none;
    padding: 0 5px;
    display: flex;
    align-items: center;
    opacity: 0.5;
    border: none;
    &:hover,
    &--selected {
      opacity: 1;
    }
  }
}
</style>
