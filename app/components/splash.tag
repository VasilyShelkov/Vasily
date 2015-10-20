<splash>
	<div class="row">
		<div name="container" class="parainer">
			<div name="parallax">
				<img src="images/unknown.jpg"/>
			</div>
		</div>
	</div>

	<style scoped>
		div.parainer {
			background-color: rgba(0,0,0,0.6); 
		}
	</style>

	<script>
		$(this.parallax).parallax();

		this.on('mount', () => {
			window.addEventListener('resize', this.handleResize);
			var windowHeight = opts.windowheight
			$(this.container).height(windowHeight);
		})

		this.on('unmount', () => {
			window.removeEventListener('resize', this.handleResize);
		})

		this.handleResize = () => {
			$(this.container).height($( window ).height());
		}
	</script>
</splash>