// global routes (in App.vue)
import Home from './views/Home.vue';
import Offcanvas from './components/Offcanvas.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const Paintings = resolve => {
	require.ensure(['./views/Paintings.vue'], () => {
		resolve(require('./views/Paintings.vue'));
	});
};

const Watercolors = resolve => {
	require.ensure(['./views/Watercolors.vue'], () => {
		resolve(require('./views/Watercolors.vue'));
	});
};

const Drawings = resolve => {
	require.ensure(['./views/Drawings.vue'], () => {
		resolve(require('./views/Drawings.vue'));
	});
};

const Events = resolve => {
	require.ensure(['./views/Events.vue'], () => {
		resolve(require('./views/Events.vue'));
	});
};

const Artist = resolve => {
	require.ensure(['./views/Artist.vue'], () => {
		resolve(require('./views/Artist.vue'));
	});
};

export const routes = [
	{
		path: '',
		name: 'home',
		components: {
			default: Home,
			'offcanvas': Offcanvas,
			'header': Header,
			'footer': Footer
		}
	},
	{
		path: '/paintings',
		name: 'paintings',
		components: {
			default: Paintings,
			'offcanvas': Offcanvas,
			'header': Header
		}
	},
	{
		path: '/watercolors',
		name: 'watercolors',
		components: {
			default: Watercolors,
			'offcanvas': Offcanvas,
			'header': Header
		}
	},
	{
		path: '/drawings',
		name: 'drawings',
		components: {
			default: Drawings,
			'offcanvas': Offcanvas,
			'header': Header
		}
	},
	{
		path: '/events',
		name: 'events',
		components: {
			default: Events,
			'offcanvas': Offcanvas,
			'header': Header,
			'footer': Footer
		}
	},
	{
		path: '/artist',
		name: 'artist',
		components: {
			default: Artist,
			'offcanvas': Offcanvas,
			'header': Header,
			'footer': Footer
		}
	},
	{
		path: '*',
		redirect: { name: 'home' }
	}
]