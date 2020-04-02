import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCookie from 'vue-cookie'

Vue.use(VueGoogleMaps, {
  load: {
    libraries: 'places'
  }
});

Vue.use(BootstrapVue, IconsPlugin, VueCookie);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store:store,
  components: { App }
}).$mount('#app')