<template>
  <div>
    <h2>{{ title }}</h2>
    <p>
      <i>{{ description }}</i>
    </p>
    <img :src="image" alt="" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, onUnmounted } from '@vue/composition-api';
import { onSSR, vsfRef } from '@vue-storefront/core';
import { take } from 'rxjs/operators';
import { useInjectable } from '@spryker-oryx/vsf';
import { Services } from '@spryker-oryx/experience';

export default Vue.extend({
  name: 'BannerEB',
  props: {
    componentId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const content$ = useInjectable(Services.Experience).getContent({
      key: props.componentId as string,
    });
    let contentSubscription = null;
    const content = vsfRef(
      { title: '', description: '', image: '' },
      `banner-content-${props.componentId}`,
    );

    const title = computed(() => {
      return content?.value?.title ? content.value.title : '';
    });

    const description = computed(() => {
      return content?.value?.description ? content.value.description : '';
    });

    const image = computed(() => {
      return content?.value?.image ? content.value.image : '';
    });

    onSSR(async () => {
      const data: any = await content$.pipe(take(1)).toPromise();
      if (data) {
        content.value = data.data;
      }
    });

    contentSubscription = content$.subscribe((data: any) => {
      if (data) {
        content.value = data.data;
      }
    });

    onUnmounted(() => {
      if (contentSubscription) {
        contentSubscription.unsubscribe();
      }
    });

    return {
      title,
      description,
      image,
    };
  },
  methods: {},
});
</script>

<style scoped></style>
