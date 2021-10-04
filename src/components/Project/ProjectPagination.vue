<template>
  <div>
    <g-link :to="`${next.slug.current}`">
      <AppImage :main-image="nextImage" />
      <p>next</p>
      <h2>{{ next.title }}</h2>
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

