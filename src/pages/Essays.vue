<template>
  <Layout>
    <h1>Essays</h1>
    <div>
      <EssayList v-if="$page.essays.edges.length" :essays="$page.essays.edges" />
      <div v-else>
        <h3>Nothing here yet...</h3>
      </div>
      <Pager
        ariaLabel="Essay pagination navigation"
        :info="$page.essays.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int){
    essays: allSanityEssay(sortBy: "publishedAt" perPage: 4, page: $page) @paginate {
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
          author {
            name
          }
          title
          publishedAt(format: "MMMM D, YYYY")
          mainImage {
            asset {
              id
              localFile(width: 660, quality: 80)
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from 'gridsome'
import EssayList from '@/components/Essays/EssayList'

export default {
  components: {
    Pager,
    EssayList,
  },
  metaInfo: {
    title: 'Essays',
  },
}
</script>
