<template>
  <nav>
    <ul>
      <li v-for="item in nav" :key="'nav-item-' + item.label">
        <g-link :to="item.to">
          {{ item.label }}
        </g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          label: 'Projects',
          to: '/',
        },
        {
          label: 'Essays',
          to: '/essays',
        },
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Contact',
          to: '/contact',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  nav {
    float: right;
  }
  li {
    list-style: none;
    display: inline-block;
    padding: 1rem;
    margin: 0 1rem;
  }
</style>