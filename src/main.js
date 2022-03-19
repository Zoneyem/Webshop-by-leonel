import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import jQuery from 'jquery'
//windows.$ = window.jQuery = jQuery
import "bootstrap/dist/js/bootstrap.esm";
import "popper.js";



createApp(App).use(router).mount('#app')
