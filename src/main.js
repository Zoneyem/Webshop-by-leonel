import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import projectFirestore from './firebase/config'

import jQuery from 'jquery'
//windows.$ = window.jQuery = jQuery
import "bootstrap/dist/js/bootstrap.esm";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "popper.js";



createApp(App).use(router).mount('#app')
