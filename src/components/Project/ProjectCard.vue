<template>
  <g-link class="row grid-padding">
    <h2 class="col-3">
      <g-link :to="projectUrl">
      {{ project.title }}
      </g-link>
    </h2>
    <p class="col-7 subtitle">{{ project.subtitle }}</p>
    <p class="col-2 year">{{ project.years }}</p>
    <div class="image-container">
      <AppImage
        :main-image="project.mainImage.image"
        placeholder
      />
    </div>
  </g-link>
</template>


<script>
import AppImage from '@/components/AppImage'

export default {
  name: 'ProjectCard',
  components: {
    AppImage,
  },
  computed: {
    projectUrl() {
      return `${this.project.slug.current}`
    },
  },
  props: {
    project: Object,
    index: Number,
  },
}
</script>

