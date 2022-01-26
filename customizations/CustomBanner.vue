<template>
  <div>
    <h1>LALALA</h1>
    <SfHero v-if="content.items && content.items.length > 0" class="hero">
      <SfHeroItem
        v-for="(hero, i) in content.items"
        :key="i"
        :title="hero.title"
        :subtitle="hero.subtitle"
        :button-text="hero.buttonText"
        :background="hero.background"
        :image="hero.image"
        :class="hero.className"
      />
    </SfHero>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SfHero } from '@storefront-ui/vue';
import { onUnmounted } from '@vue/composition-api';
import { onSSR, vsfRef } from '@vue-storefront/core';
import { take } from 'rxjs/operators';
import { useInjectable } from '@spryker-oryx/vsf';
import { Services } from '@spryker-oryx/experience';

export default Vue.extend({
  name: 'Banner',
  props: {
    componentId: {
      type: String,
      required: true,
    },
  },
  components: {
    SfHero,
  },
  setup(props) {
    const content$ = useInjectable(Services.Experience).getContent({
      key: props.componentId as string,
    });
    const content = vsfRef({}, `banner-content-${props.componentId}`);
    const contentSubscription = null;

    onSSR(async () => {
      const res: any = await content$.pipe(take(1)).toPromise();
      content.value = res.data ? res.data : res;
    });

    content$.subscribe((res: any) => {
      content.value = res.data ? res.data : res;
    });

    onUnmounted(() => {
      if (contentSubscription) {
        contentSubscription.unsubscribe();
      }
    });

    return {
      content,
    };
  },
  methods: {},
});
</script>

<style scoped></style>
