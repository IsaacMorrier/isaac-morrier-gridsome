import 'fontsource-inter'
import 'fontsource-inter/600.css'
import 'fontsource-inter/700.css'
import 'fontsource-inter/900.css'

import '@/assets/styles/theme.scss'
import '@/assets/styles/global.scss'

import urlForImage from '@/utils/urlForImage'
import DefaultLayout from '@/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage

  // Add Typekit Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/ngl3ecq.css'
  })
}
