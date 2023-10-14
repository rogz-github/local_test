// import jQuery from 'jquery';
// window.$ = jQuery
import {createApp} from 'vue'
import { createRouter,createWebHistory } from "vue-router";
// import UIkit from 'uikit'
// window.UIkit = UIkit

// Import Components
import mainApps from './app.vue'
import Cart from "./components/user/cart.vue";
import Category from "./components/user/category.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name:'home',
            path:'/',
            component:mainApps
        },
        {
            name:'cart',
            path:'/cart',
            component:Cart
        },
        {
            name:'category',
            path:'/c/:cslug',
            component:Category
        }
    ]
})

createApp(mainApps).use(router).mount("#app");
