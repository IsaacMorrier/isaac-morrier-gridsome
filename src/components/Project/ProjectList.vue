<template>
  <div class="grid-container-fluid">
    <ProjectCard
      v-for="project in projects"
      :key="project.node.id"
      :project="project.node"
    />
  </div>
</template>

<script>
import ProjectCard from '@/components/Project/ProjectCard'

export default {
  name: 'ProjectList',
  components: {
    ProjectCard,
  },
  props: {
    projects: Array,
  },
}
</script>

<style lang="scss">
  a {
    text-decoration: none;
  }
  .subtitle,
  .year {
    color: var(--color-text-alt);
  }
  .row {
    margin-bottom: 7.5rem;
  }
  .image-container div {
    height: 80vw;
    & > img {
      height: 100%;
      width: auto;
    }
  }
</style>
