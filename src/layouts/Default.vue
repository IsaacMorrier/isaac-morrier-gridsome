<template>
  <div>
    <header>
      <div>
        <div>
          <g-link to="/">
            <strong>{{ $static.metadata.siteName }}</strong>
          </g-link>
        </div>
        <AppNav />
        <ThemeToggle />
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
import ThemeToggle from '@/components/ThemeToggle.vue'

export default {
  components: {
    AppNav,
    AppFooter,
    ThemeToggle,
  },
}
</script>

<style>

</style>
