<template>
  <div>
    <header>
      <div>
        <AppNav />
        <div class="logo">
          <h1>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </h1> 
        </div>
      </div>
    </header>
    <div>
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppNav,
    AppFooter,
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/typography.scss';

  .logo a {
    @include garamond-display-light;
    text-decoration: none;
  }
</style>
