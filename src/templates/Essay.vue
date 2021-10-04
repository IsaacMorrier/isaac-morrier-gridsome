<template>
  <Layout>
    <div>
      <article>
        <header>
          <h1>
            {{ $page.essay.title }}
          </h1>
        </header>
        <AppImage
          v-if="$page.essay.mainImage"
          :main-image="$page.essay.mainImage"
        />

        <div>
          <div>
            <span v-if="$page.essay.author"
              >By: {{ $page.essay.author.name }} /</span
            >
            Posted on: {{ $page.essay.publishedAt }}
          </div>
          <BlockContent :blocks="$page.essay._rawBody" />
          <EssayPagination :next="$page.nextEssay" :prev="$page.prevEssay" />
        </div>
      </article>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($id: ID!, $nextID: ID!, $prevID: ID!) {

    essay: sanityEssay (id: $id) {
      author {
        name
      }
      title
      publishedAt(format: "MMMM D, YYYY")
      _rawBody
      mainImage {
        asset {
          id
          localFile(width: 1400, quality: 80)
          url
        }
      }
    }

    nextEssay: sanityEssay (id: $nextID) {
      slug {
        current
      }
      title
    }

    prevEssay: sanityEssay (id: $prevID) {
      slug {
        current
      }
      title
    }
  }
</page-query>

<script>
import AppImage from '@/components/AppImage'
import BlockContent from '@/components/BlockContent'
import EssayPagination from '@/components/Essays/EssayPagination'

export default {
  name: 'Essay',
  components: {
    AppImage,
    BlockContent,
    EssayPagination,
  },
  metaInfo() {
    return {
      title: this.$page.essay.title,
    }
  },
}
</script>
