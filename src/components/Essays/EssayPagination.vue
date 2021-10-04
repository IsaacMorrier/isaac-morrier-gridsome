<template>
  <footer>
    <div>
      <g-link
        :to="`/essays/${prev.slug.current}`"
        :aria-label="`Previous essay: ${next.title}`"
      >
        <span>previous</span
        >
        {{ prev.title }}
      </g-link>
    </div>
    <div>
      <g-link
      :to="`/essays/${next.slug.current}`"
        :aria-label="`Next essay: ${next.title}`"
      >
        <span>next</span
        >
        {{ next.title }}
      </g-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'EssayPagination',
  props: {
    prev: Object,
    next: Object,
  },
}
</script>
