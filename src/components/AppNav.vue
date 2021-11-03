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
        // {
        //   label: 'Projects',
        //   to: '/',
        // },
        // {
        //   label: 'Essays',
        //   to: '/essays',
        // },
        {
          label: 'info',
          to: '/info',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  @use "sass:math";
  @import "src/assets/styles/variables.scss";
  
  ul {
    padding: 0;
  }
  li {
    display: inline-block;
    padding: 0;
    margin: 0;
    a {
      padding: 1rem 1rem 1rem math.div($global-gutter, 2);
    }
  }
</style>