import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


// Components
import Homepage from './components/Homepage.vue';
import SignIn from './components/SignIn.vue';
import Payment from './components/Payment.vue';
import Expenses from './components/Expenses.vue';
import Coins from './components/Coins.vue';
import SendMoney from './components/SendMoney.vue';
import Sendto from './components/Sendto.vue';


Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
	{path: '/', component: Homepage},
	{path: '/signin', component: SignIn},
	{path: '/payment', component: Payment},
	{path: '/expenses', component: Expenses},
	{path: '/coins', component: Coins},
	{path: '/sendmoney', component: SendMoney},
	{path: '/sendto', component: Sendto}
	]
})

new Vue({
	el: '#app',
	components: { App },
	router: router,
	template: '<App/>'
})
