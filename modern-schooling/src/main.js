import Vue from "vue";
import App from "./App.vue";

/* FONT AWESOME */
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowUpLong,
  faAngleDown,
  faBook,
  faLifeRing,
  faCircleUser,
  faCartShopping,
  faMagnifyingGlass,
  faDownload,
  faArrowRightLong,
  faCircleMinus,
  faCirclePlus,
  faUser,
  faCheck,
  faFileLines,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faArrowUpLong,
  faLinkedin,
  faTwitter,
  faInstagram,
  faAngleDown,
  faBook,
  faFacebookSquare,
  faLifeRing,
  faCircleUser,
  faCartShopping,
  faMagnifyingGlass,
  faDownload,
  faArrowRightLong,
  faCircleMinus,
  faCirclePlus,
  faUser,
  faCheck,
  faFileLines,
  faLocationDot
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

/* FONT */
import "@fontsource/poppins";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
