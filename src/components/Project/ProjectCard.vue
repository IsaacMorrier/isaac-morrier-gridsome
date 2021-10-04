<template>
  <li>
    <g-link :to="projectUrl">
      <AppImage
        :main-image="project.mainImage"
        placeholder
      />

      <h2>
        {{ project.title }}
      </h2>
    </g-link>
  </li>
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

