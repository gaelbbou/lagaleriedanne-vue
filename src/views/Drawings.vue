<template>
	<div
		id="drawings"
		class="gallery"
		v-bind:style="{ backgroundImage: 'url(' + data.website.imgGallery + ')' }"
	>
		<!-- preload -->
		<img class="display-none" loading="eager" v-bind:src="data.website.imgGallery" />

		<!-- art -->
		<div
			class="gallery-art align-center"
			v-for="drawing in data.gallery.drawings"
			v-bind:key="drawing"
			v-bind:id="drawing.name"
			v-bind:class="drawing.classDisplay"
		>
			<img
				class="setting-shadow--motion"
				loading="lazy"
				v-bind:src="drawing.image.path1"
				v-bind:srcset="drawing.image.path2"
			/>
			<div class="gallery-art-note setting-shadow--motion">
				<h5 class="align-center">{{ drawing.title }}</h5>
				<h6 class="align-center">{{ drawing.type }} - {{ drawing.size }}</h6>
			</div>
		</div>
		<!-- /art -->

		<div class="gallery-buttons align-center">
			<router-link
				to="/paintings"
				class="button button-small button-base--ghost button-block"
			>Peintures</router-link>
			<router-link
				to="/watercolors"
				class="button button-small button-base--ghost button-block"
			>Aquarelles</router-link>
			<router-link to="/drawings" class="button button-small button-base--ghost button-block">Dessins</router-link>
		</div>

		<button
			class="button button-white--ghost button-special gallery-arrowright"
			v-on:click="smoothscrollRight"
		>
			<icon-arrowright class="icon"></icon-arrowright>
		</button>
	</div>
</template>

<script>
import Json from '../assets/data/data.json';
import { scrollLateralMixin } from '../mixins/scrollLateralMixin.js';
import IconArrowright from '../assets/icons/IconArrowright.vue';

export default {
	data() {
		return {
			data: Json
		}
	},
	mixins: [scrollLateralMixin],
	components: {
		'icon-arrowright': IconArrowright
	}
}
</script>