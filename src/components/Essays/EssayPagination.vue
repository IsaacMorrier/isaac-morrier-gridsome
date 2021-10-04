<template>
  <footer>
    <div>
      <g-link
        :to="`/blog/${prev.slug.current}`"
        :aria-label="`Previous post: ${next.title}`"
      >
        <span>previous</span
        >
        {{ prev.title }}
      </g-link>
    </div>
    <div>
      <g-link
      :to="`/blog/${next.slug.current}`"
        :aria-label="`Next post: ${next.title}`"
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
  name: 'PostPagination',
  props: {
    prev: Object,
    next: Object,
  },
}
</script>
