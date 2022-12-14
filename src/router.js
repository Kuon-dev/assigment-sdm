import { createRouter, createWebHistory } from 'vue-router';
//import HelloWorld from './components/HelloWorld.vue'

import Home from './views/HomePage.vue';
import Signup from './views/SignupPage.vue';
import Admin from './views/AdminGUI.vue';
import Manager from './views/ManagerGUI.vue';
import AdminDash from './views/AdminDashboard.vue';
import PackageRegister from './views/PackageRegister.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import Receptionist from './views/ReceptionistGUI.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'homepg',
			component: Home,
			props: true
		},
		{
			path: '/Signup',
			name: 'Signup',
			component: Signup,
			props: true
		},
		{
			path: '/Admin',
			name: 'Admin',
			component: Admin,
			props: true
		},
		{
			path: '/Manager',
			name: 'Manager',
			component: Manager,
			props: true
		},
		{
			path:'/AdminDash',
			name: 'AdminDash',
			component: AdminDash,
			props: true
		},
		{
			path: '/PackageRegister',
			name: 'PackageRegister',
			component: PackageRegister,
			props: true
		},
		{
			path: '/ShoppingCart',
			name: 'ShoppingCart',
			component: ShoppingCart,
			props: true
		},
		{
			path: '/Receptionist',
			name: 'Receptionist',
			component: Receptionist,
			props: true
		}
	]
});
