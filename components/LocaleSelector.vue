<template>
  <div class="container">
    <SfButton
      class="container__button container__button--selected"
      @click="isLangModalOpen = !isLangModalOpen"
    >
      {{ abbreviations[locale] }}
      <SfIcon :icon="arrowIcon.path" :class="arrowIcon.class" :viewBox="arrowIcon.viewBox"/>
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
  SfIcon,
  SfSelect,
  SfButton,
  SfList,
  SfBottomModal,
  SfCharacteristic,
} from '@storefront-ui/vue';
import { ref, computed } from '@vue/composition-api';
import { useLocale } from '@spryker-vsf/composables';
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
      arrowIcon,
      abbreviations: {en_US: 'EN', de_DE: 'DE'}
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
      padding: var(--spacer-sm);
      &__flag {
        margin-right: var(--spacer-sm);
      }
    }
    @include for-desktop {
      display: flex;
    }
  }
}
</style>
