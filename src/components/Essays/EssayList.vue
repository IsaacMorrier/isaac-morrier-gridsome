<template>
  <ul>
    <li v-for="(edge, index) in essays" :key="edge.node.id">
      <EssayCard :index="index" :essay="edge.node" />
    </li>
  </ul>
</template>

<script>
import EssayCard from '@/components/Essays/EssayCard'

export default {
  name: 'EssayList',
  components: {
    EssayCard,
  },
  props: {
    essays: Array,
  },
}
</script>

