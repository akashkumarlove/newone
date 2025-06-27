// plugins/fontawesome.client.ts

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 👉 Import icons here
import { faTimes, faHome, faBars } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faTimes, faHome, faBars)
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
