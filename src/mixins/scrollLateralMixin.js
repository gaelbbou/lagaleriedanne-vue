export const scrollLateralMixin = {
	methods: {
		smoothscrollRight() {
			window.scrollBy(100, 0);
		}
	},
	created() {	// do this at launch
		this.smoothscrollRight();
	}
};