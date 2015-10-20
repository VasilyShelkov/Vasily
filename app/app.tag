import './components/nav-bar.tag';
import './components/splash.tag'
import './components/personality/developer.tag'

<app>
		<nav-bar />
		<splash windowheight={this.windowHeight}/>
		<developer>
	<script>
	this.windowHeight = $( window ).height();
	</script>
</app>