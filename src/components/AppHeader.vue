<template>
    <header class="grid-container-fluid">
      <div class="row">
        <div class="logo col-7">
          <h1>
            <g-link to="/">{{ $static.metadata.siteName }} — strategist, photographer, and designer currently in Washington, DC.</g-link>
          </h1> 
          <!-- <p>
            <g-link to="/">{{ Object.getOwnPropertyNames($page) }}</g-link>
          </p>  -->
        </div>
        <div class="col-2 col-offset-3">
          <AppNav />
        </div>
      </div>
    </header>
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

export default {
  components: {
    AppNav,
  }
}
</script>

<style lang="scss" scoped>
  @use "sass:math";
  @import "src/assets/styles/variables.scss";

  header {
    height: 10rem;
  }

  .logo h1,
  .logo p {
      font-size: 0.625rem;
      margin: 0;
      a {
          display: inline-block;
          padding: 1rem 1rem 1rem $global-gutter;
          @include breakpoint(lg) {
            padding: 1rem 1rem 1rem $global-gutter-lg;
          }
      }
  }
</style>