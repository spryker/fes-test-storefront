<template>
  <!-- TODO: replace example images with the getter, wait for SfGallery fix by SFUI team: https://github.com/DivanteLtd/storefront-ui/issues/1074 -->
  <SfGallery
    data-cy="svsf-productSection-error-message"
    class="product__gallery"
    :images="images"
    imageWidth="570"
    thumbWidth="70"
    thumbHeight="70"
  >
    <template #thumbs="{images, active, go}">
      <SfButton class="sf-button--pure" @click="scrollUp" v-if="showScroll">
        <SfIcon :icon="arrowIcon.path" :viewBox="arrowIcon.viewBox" :class="arrowIcon.class" class="up"/>
      </SfButton>
      <div class="sf-gallery__thumbs--scroll" ref="scrollContainer">
        <SfButton
        v-for="(image, index) in images"
        :key="'img-' + index"
        class="sf-button--pure sf-gallery__item"
        :class="{ 'sf-gallery__item--selected': index === active }"
        @click="go(index)"
        >
          <SfImage
            class="sf-gallery__thumb"
            :src="image.mobile.url"
            :alt="image.alt"
          />
        </SfButton>
      </div>
      <SfButton class="sf-button--pure" @click="scrollDown" v-if="showScroll">
        <SfIcon :icon="arrowIcon.path" :viewBox="arrowIcon.viewBox" :class="arrowIcon.class"/>
      </SfButton>
    </template>
  </SfGallery>
</template>

<script>
import {
  SfGallery,
  SfButton,
  SfImage,
  SfIcon
} from '@storefront-ui/vue';
import { computed, ref } from '@vue/composition-api';
import { arrowIcon } from '~/assets/icons';

export default {
  name: 'ProductGallery',
  transition: 'fade',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context) {
    const scrollContainer = ref(null);
    const showScroll = computed(() => props.images.length > 5);
    const scrollUp = () => {
      scrollContainer.value.scrollTop -= 90 + scrollContainer.value.scrollTop % 90;
    };

    const scrollDown = () => {
      scrollContainer.value.scrollTop += 90 - scrollContainer.value.scrollTop % 90;
    };
    return {
      showScroll,
      scrollUp,
      scrollDown,
      scrollContainer,
      arrowIcon
    };
  },
  components: {
    SfGallery,
    SfButton,
    SfImage,
    SfIcon
  }
};
</script>

<style lang="scss" scoped>
.product__gallery {
  --gallery-thumb-width: 70px;
  --gallery-stage-width: 570px;
  --gallery-item-margin: 0;
  --gallery-item-opacity: 100%;
  flex: 1;
  ::v-deep {
    .sf-gallery__thumbs {
      --padding: 0 30px;
      --gallery-thumbs-margin: 0 0 0 -30px;
      padding: var(--padding);

      &--scroll {
        padding: var(--padding);
        gap: 20px;
        display: flex;
        margin: 20px 0 0 -30px;
        flex-direction: var(--gallery-thumbs-flex-direction);
        overflow: auto;
        scrollbar-width: none;

        @include for-desktop {
          height: 450px;
          width: var(--gallery-thumb-width);
        }

        &::-webkit-scrollbar {
          display: none;
        }
      }

      .arrow-icon {
        --icon-width: 12px;
        --icon-height: 7px;
        --icon-color: #B2B2B2;

        &.up {
          transform: scaleY(-1);
        }
      }
    }
    .sf-image {
      object-fit: contain;
      height: auto;
    }
    .sf-gallery__thumb .sf-image {
      height: var(--gallery-thumb-width);
      width: var(--gallery-thumb-width);
    }
  }
}
</style>

<style lang="scss">
.sf-gallery__item {
  --button-background: rgba(0, 0, 0, 0.04);

  &--selected {
    --button-background: var(--c-white);
    &:before {
      --button-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.04), 0px 18px 18px rgba(0, 0, 0, 0.0474128);
      --button-box-shadow-opacity: 1;
    }
  }
}

.sf-gallery__thumb {
  height: var(--gallery-thumb-width);
}

.glide__slides {
  align-items: center;
}
</style>
