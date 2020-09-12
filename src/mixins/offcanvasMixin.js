export const offcanvasMixin = {
	methods: {
		offcanvasOpen() {
			document.getElementById("offcanvas").style.height = "100%";

			// OFFCANVAS SIDE
			// set width of side navigation to 240px
			// document.querySelector('#offcanvas').style.width = '240px';
			// add overlay to #oncanvas
			// document.querySelector('#oncanvas').classList.add('background-base--strong');
			// set left margin of page content to 240px (if you want oncanvas to be pushed)
			// document.querySelector('#oncanvas').style.marginRight = '240px';
		},
		offcanvasClose() {
			document.getElementById("offcanvas").style.height = "0%";

			// OFFCANVAS SIDE
			// set width of side navigation to 0px
			// document.querySelector('#offcanvas').style.width = '0';
			// remove overlay to #oncanvas
			// document.querySelector('#oncanvas').classList.remove('background-base--strong');
			// set left margin of page content to 0px (if you want oncanvas to be put back)
			// document.querySelector('#oncanvas').style.marginRight = '0';
		}
	},
	created() {	// do this at launch
		this.offcanvasOpen();
		this.offcanvasClose();
	}
};