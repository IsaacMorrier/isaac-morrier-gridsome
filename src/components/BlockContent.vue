<template>
  <PortableText
    v-if="hasBlocks"
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
  />
</template>

<static-query>
  query {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }

    localImages: allSanityImageAsset {
      edges {
        node {
          id
          localFile
          url
        }
      }
    }
  }
</static-query>

<script>
import PortableText from 'sanity-blocks-vue-component'

export default {
  props: {
    blocks: Array,
  },
  components: {
    PortableText,
  },
  computed: {
    hasBlocks() {
      return this.blocks && this.blocks.length
    },
  },
  data() {
    return {
      serializers: {
        types: {
          image: ({ node }) => {
            const localImage = this.$static.localImages.edges.find(
              ({ node: localImage }) => {
                if (localImage.id === node.asset._ref) {
                  return localImage
                }
              }
            )

            if (localImage) {
              const { node } = localImage

              return (
                <figure>
                  <g-image src={node.localFile} alt={node.alt}/>
                </figure>
              )
            }

            return (
              <figure>
                <img
                  src={this.$urlForImage(
                    node,
                    this.$static.metadata.sanityOptions
                  )
                    .auto('format')
                    .quality(80)
                    .url()}
                  alt={node.alt}
                />
              </figure>
            )
          },
          accessibleImage: ({ node }) => {
            const alt = node.alt;
            const localImage = this.$static.localImages.edges.find(
              ({ node: localImage }) => {
                if (localImage.id === node.image.asset._ref) {
                  return localImage
                }
              }
            )

            if (localImage) {
              const { node } = localImage

              return (
                <figure>
                  <g-image src={node.localFile} alt={alt}/>
                </figure>
              )
            }

            return (
              <figure>
                <img
                  src={this.$urlForImage(
                    node,
                    this.$static.metadata.sanityOptions
                  )
                    .auto('format')
                    .quality(80)
                    .url()}
                  alt={node.alt}
                />
              </figure>
            )
          },
        },
      },
    }
  },
}
</script>