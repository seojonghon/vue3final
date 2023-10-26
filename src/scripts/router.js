import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Cart from "@/pages/Cart.vue";
import Order from "@/pages/Order.vue";
import Orders from "@/pages/Orders.vue";
import {createRouter, createWebHistory} from "vue-router";

import Read from "@/pages/Read.vue";
import Create from "@/pages/Create.vue";
import Detail from "@/pages/Detail.vue";
import BoardForm from "@/pages/BoardForm.vue";
import Inform from "@/pages/Inform.vue";
import POrder from "@/pages/POrder.vue";
import POrders from "@/pages/POrders.vue";
import PHome from "@/pages/PHome.vue";
import PCart from "@/pages/PCart.vue";
import Boards from "@/pages/Message.vue";
import Crawler from "@/pages/Crawler.vue";
import Message from "@/pages/Message.vue"; // 추가



const routes= [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/cart', component: Cart},
    {path: '/order', component: Order},
    {path: '/orders', component: Orders},
    {path: "/Read", name: "Read", component: Read},
    {path: '/create/:contentId?', name: 'Create', component: Create},
    {path: "/detail/:contentId", name: "Detail", component: Detail},
    {path: "/createAccount", name: "BoardForm", component: BoardForm},
    {path: "/Inform", name: "Inform", component: Inform},
    {path: '/porder', component: POrder},
    {path: '/porders', component: POrders},
    {path: '/phome', component: PHome},
    {path: '/pcart', component: PCart},
    {path: '/boards', component: Boards},
    {path: '/edit', component: Message},
    {path: '/Crawling', component: Crawler} // 추가
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
