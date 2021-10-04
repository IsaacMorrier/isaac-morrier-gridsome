<template>
  <Layout>
    <div>
      <header>
        <h1>
          {{ $page.project.title }}
        </h1>
      </header>
      <AppImage
        v-if="$page.project.mainImage"
        :main-image="$page.project.mainImage"
      />

      <div>
        <BlockContent :blocks="$page.project._rawBody" />
        <ProjectPagination
          :next="$page.next"
          :next-image="$page.next.mainImage"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($id: ID!, $nextID: ID!) {

    project: sanityProject (id: $id) {
      title
      _rawBody
      mainImage {
        asset {
          id
          localFile(width: 1400, quality: 80)
          url
        }
      }
    }

    next: sanityProject (id: $nextID) {
      slug {
        current
      }
      title
      mainImage {
        asset {
          id
          localFile(width: 400, quality: 60)
          url
        }
      }
    }
  }
</page-query>

<script>
import AppImage from '@/components/AppImage'
import BlockContent from '@/components/BlockContent'
import ProjectPagination from '@/components/Project/ProjectPagination'

export default {
  name: 'Project',
  components: {
    AppImage,
    BlockContent,
    ProjectPagination,
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
    }
  },
}
</script>
