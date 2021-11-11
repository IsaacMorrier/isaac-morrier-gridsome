<template>
  <div>
    <g-link :to="`${next.slug.current}`">
        <h1 class="col-3">
          {{ next.title }}
        </h1>
        <p class="col-7 subtitle">{{ next.subtitle }}</p>
        <p class="col-2 year">{{ next.years }}</p>
      <AppImage :main-image="nextImage" />
    </g-link>
  </div>
</template>

<script>
import AppImage from '@/components/AppImage'

export default {
  name: 'ProjectPagination',
  components: {
    AppImage,
  },
  props: {
    next: Object,
    nextImage: Object,
  },
}
</script>

