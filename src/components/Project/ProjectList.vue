<template>
  <ul>
    <ProjectCard
      v-for="project in projects"
      :key="project.node.id"
      :project="project.node"
    />
  </ul>
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
