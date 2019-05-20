import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
import './lib/Mui/css/mui.min.css'
import './lib/Mui/css/icons-extra.css'
import { Header ,Swipe, SwipeItem,Toast } from 'mint-ui';
import router from './router.js'

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
	el:"#app",
	render:c=>c(app),
	router
})