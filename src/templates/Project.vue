<template>
  <Layout>
    <div class="grid-container-fluid">
      <div class="row grid-padding">
        <h1 class="col-3">
          {{ $page.project.title }}
        </h1>
        <p class="col-7 subtitle">{{ $page.project.subtitle }}</p>
        <p class="col-2 year">{{ $page.project.years }}</p>

        <BlockContent :blocks="$page.project._rawBody" />
        <ProjectPagination
          :next="$page.next"
          :next-image="$page.next.mainImage.image"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Project ($id: ID!, $nextID: ID!) {

    project: sanityProject (id: $id) {
      title
      subtitle
      years
      _rawBody
      mainImage {
        alt
        caption
        image {
          asset {
            id
            localFile(width: 1860, quality: 80)
            url
          }
        }
      }
    }

    next: sanityProject (id: $nextID) {
      slug {
        current
      }
      title
      mainImage {
        alt
        caption
        image {
          asset {
            id
            localFile(width: 1860, quality: 80)
            url
          }
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
