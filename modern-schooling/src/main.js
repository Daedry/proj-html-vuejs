import Vue from 'vue'
import App from './App.vue'

/* FONT AWESOME */
import { library } from '@fortawesome/fontawesome-svg-core'

import { faAngleDown, faCircleUser, faCartShopping, faMagnifyingGlass, faDownload, faArrowRightLong, faCircleMinus, faCirclePlus, faUser, faCheck, faFileLines, faLocationDot  } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleDown, faCircleUser, faCartShopping, faMagnifyingGlass, faDownload, faArrowRightLong, faCircleMinus, faCirclePlus, faUser, faCheck, faFileLines, faLocationDot )

Vue.component('font-awesome-icon', FontAwesomeIcon)
/* /.FONT AWESOME */


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
