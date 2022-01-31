<template>
  <div class="dropdown-radio__wrapper" :class="{ 'is-selected': isSelected }">
    <SfRadio
      :selected="selected"
      :value="value"
      :label="label"
      :disabled="disabled"
      @input="inputHandler"
    />
    <div
      class="dropdown-radio__content"
      :class="{ 'is-visible': isSelected && hasDefaultSlot }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { SfRadio } from '@storefront-ui/vue';

export default {
  name: 'DropdownRadio',
  components: { SfRadio },
  props: {
    value: {
      type: String,
      default: '',
    },
    selected: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isSelected() {
      return this.selected === this.value;
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
  },
  methods: {
    inputHandler() {
      this.$emit('input', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-radio {
  &__wrapper {
    margin-bottom: 15px;

    border: 2px solid #dce0e5;
    border-radius: 2px;

    &.is-selected {
      border: 2px solid #1ebea0;
    }

    &::v-deep > .sf-radio {
      background: none;
    }

    &::v-deep > .sf-radio > .sf-radio__container {
      padding: 25px 20px;
    }

    &::v-deep > .sf-radio > .sf-radio__container > .sf-radio__content {
      padding-top: 3px;
    }
  }

  &__content {
    height: 0;
    overflow: hidden;

    &.is-visible {
      height: auto;

      padding: 0 20px 20px 20px;
    }
  }
}
</style>