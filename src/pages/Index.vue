<template>
  <Layout>
    <ProjectList
      :projects="loadedProjects"
    />
    <ClientOnly>
        <infinite-loading @infinite="infiniteHandler" spinner="spiral">
          <div slot="no-more">
            end.
          </div>
          <div slot="no-results">
            No Projects
          </div>
        </infinite-loading>
      </ClientOnly>
  </Layout>
</template>

<page-query>
query ($page: Int){
  projects: allSanityProject (sortBy: "completed", perPage: 3, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        slug {
          current
        }
        title
        subtitle
        years
        mainImage {
          alt
          caption
          image {
            asset {
              id
              localFile(width: 1100, quality: 100)
              url
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
// import { Pager } from 'gridsome'
import ProjectList from '@/components/Project/ProjectList'

export default {
  components: {
    // Pager,
    ProjectList,
  },
  metaInfo: {
    title: 'Work',
  },
  data() {
    return {
      loadedProjects: [],
      currentPage: 1
    }
  },
  created() {
    this.loadedProjects.push(...this.$page.projects.edges)
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.projects.pageInfo.totalPages) {
        $state.complete()
      } else {
        const { data } = await this.$fetch(
          `/${this.currentPage + 1}`
        )
        if (data.projects.edges.length) {
          this.currentPage = data.projects.pageInfo.currentPage
          this.loadedProjects.push(...data.projects.edges)
          $state.loaded()
        } else {
          $state.complete()
        }
      }
    }
  }

}
</script>
