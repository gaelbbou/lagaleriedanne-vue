import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
	// for removing # in urls (if server configured to index.html only)
	// mode: 'history',
	routes,
	// for using # scroll
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return { selector: to.hash };
		}
		else {
			return { x: 0, y: 0 };
		}
	}
});

new Vue({
	el: '#app',
	// adding router
	router,
	render: h => h(App)
})
