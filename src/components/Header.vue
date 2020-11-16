<template>
	<header id="header">
		<div class="container-fluid">
			<nav role="navigation">
				<!-- logo -->
				<router-link
					id="header-logo"
					class="float-left link link-theme text-secondary"
					to="/"
				>Anne's Gallery</router-link>

				<!-- menu desktop -->
				<ul
					id="header-nav-laptop"
					class="nav-horizontal nav-small float-right display-laptop display-desktop"
				>
					<li>
						<router-link to="/" class="link link-theme" activeClass="link-active" exact>Accueil</router-link>
					</li>
					<li>
						<router-link to="/paintings" class="link link-theme" activeClass="link-active" exact>Peintures</router-link>
					</li>
					<li>
						<router-link
							to="/watercolors"
							class="link link-theme"
							activeClass="link-active"
							exact
						>Aquarelles</router-link>
					</li>
					<li>
						<router-link to="/drawings" class="link link-theme" activeClass="link-active" exact>Dessins</router-link>
					</li>
					<li>
						<router-link to="/events" class="link link-theme" activeClass="link-active" exact>Événements</router-link>
					</li>
					<li>
						<router-link to="/artist" class="link link-theme" activeClass="link-active" exact>L'artiste</router-link>
					</li>
				</ul>

				<!-- menu mobile -->
				<ul
					id="header-nav-mobile"
					class="nav-horizontal nav-small float-right display-mobile display-tablet"
					v-on:click="offcanvasOpen()"
				>
					<li class="link link-theme">
						Menu
						<icon-caret class="icon icon-mini"></icon-caret>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
import Json from '../assets/data/data.json';
import { offcanvasMixin } from '../mixins/offcanvasMixin.js';
import IconCaret from '../assets/icons/IconCaret.vue';

export default {
	data() {
		return {
			data: Json
		}
	},
	mixins: [offcanvasMixin],
	components: {
		'icon-caret': IconCaret
	}
}
</script>
