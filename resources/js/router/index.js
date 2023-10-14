import { createRouter,createWebHistory } from "vue-router";
// import mainApp from "../components/user/index.vue";
import mainApps from "../app.vue";
import Cart from "../components/user/cart.vue";
import Category from "../components/user/category.vue";
const routes = [
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
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router