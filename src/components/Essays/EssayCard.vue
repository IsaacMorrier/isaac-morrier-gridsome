<template>
  <div>
    <div>
      <g-link :to="essayUrl">
        <AppImage
          :main-image="essay.mainImage"
          placeholder
        />
      </g-link>
    </div>
    <div>
      <div>
        <span v-if="essay.author"> By: {{ essay.author.name }} /</span>
        Posted on: {{ essay.publishedAt }}
      </div>
      <g-link :to="essayUrl">
        <h2>
          {{ essay.title }}
        </h2>
      </g-link>
    </div>
  </div>
</template>

<script>
import AppImage from '@/components/AppImage'

export default {
  name: 'EssayCard',
  components: {
    AppImage,
  },
  computed: {
    essayUrl() {
      return `/essays/${this.essay.slug.current}`
    },
  },
  props: {
    essay: Object,
    index: Number,
  },
}
</script>
