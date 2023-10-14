import jQuery from 'jquery';
window.$ = jQuery
import {createApp} from 'vue'
// import UIkit from 'uikit'
// window.UIkit = UIkit
import mainApp from './components/index.vue'

createApp(mainApp).mount("#app");