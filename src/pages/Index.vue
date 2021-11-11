<template>
  <Layout>
    <ProjectList
      v-if="$page.projects.edges.length"
      :projects="$page.projects.edges"
    />
    <div v-else>
      <h3>Nothing here yet...</h3>
    </div>
    <Pager
      ariaLabel="Projects pagination navigation"
      :info="$page.projects.pageInfo"
    />
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
import { Pager } from 'gridsome'
import ProjectList from '@/components/Project/ProjectList'

export default {
  components: {
    Pager,
    ProjectList,
  },
  metaInfo: {
    title: 'Projects',
  },
}
</script>
