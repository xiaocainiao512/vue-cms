import VueRouter from 'vue-router'
import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopcar from './components/tabbar/ShopcarContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
var router = new VueRouter({
	routes:[
		{path:"",redirect:"/home"},
		{path:"/home",component:home},
		{path:"/member",component:member},
		{path:"/shopcar",component:shopcar},
		{path:"/search",component:search}
	],
	linkActiveClass:'mui-active'
})

export default router