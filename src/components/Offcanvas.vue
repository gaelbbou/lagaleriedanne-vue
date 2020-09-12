<template>
	<div>
		<!-- <div id="oncanvas" class="overlay" v-on:click="offcanvasClose()"></div> -->
		<div id="offcanvas" class="overlay background-base--opaque" v-on:click="offcanvasClose()">
			<a id="offcanvas-close" class="link link-theme" v-on:click="offcanvasClose()">&times;</a>
			<ul class="nav-vertical">
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
		</div>
	</div>
</template>


<script>
import { offcanvasMixin } from '../mixins/offcanvasMixin.js';

export default {
	mixins: [offcanvasMixin]
}
</script>