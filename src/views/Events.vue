<template>
	<div id="events">
		<!-- hero -->
		<div
			id="events-hero"
			class="align-center"
			v-bind:style="{ backgroundImage: 'url(' + data.website.imgEventsHero + ')' }"
		>
			<h1 class="text-secondary align-center setting-anim--fadeinup setting-anim--delayed">Événements</h1>
		</div>
		<!-- /hero -->

		<div class="container">
			<div class="section">
				<div class="events-event align-center" v-for="event in data.events" v-bind:key="event">
					<span v-bind:id="event.name"></span>
					<br />
					<br />
					<h3 class="align-center">{{ event.title }}</h3>
					<h5 class="align-center">{{ event.type }} - {{ event.date }}</h5>
					<h5 class="align-center">
						<a
							class="link link-primary"
							v-bind:href="event.addressUrl"
							target="_blank"
						>{{ event.address }}</a>
					</h5>
					<br />
					<img
						class="image-responsive setting-shadow--soft"
						loading="lazy"
						v-bind:src="event.path1"
						v-bind:srcset="event.path2"
					/>
					<img
						class="image-responsive setting-shadow--soft"
						loading="lazy"
						v-bind:src="event.photoA1"
						v-bind:srcset="event.photoA2"
					/>
					<img
						class="image-responsive setting-shadow--soft"
						loading="lazy"
						v-bind:src="event.photoB1"
						v-bind:srcset="event.photoB2"
					/>
					<img
						class="image-responsive setting-shadow--soft"
						loading="lazy"
						v-bind:src="event.photoC1"
						v-bind:srcset="event.photoC2"
					/>
					<hr class="background-base--background" />
				</div>
			</div>
		</div>

		<contact-app></contact-app>
	</div>
</template>

<script>
import Json from '../assets/data/data.json';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

export default {
	data() {
		return {
			data: Json
		}
	},
	components: {
		'contact-app': Contact

	}
}
</script>