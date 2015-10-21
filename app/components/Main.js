import React, { Component } from 'react';
import StickyNav from './navigation/StickyNav';
import Splash from './Splash';
import Developer from './personalities/Developer';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowHeight: window.innerHeight,
			windowTop: window.screenTop
		};
	}

	componentDidMount(){
		window.addEventListener('resize', this.handleResize.bind(this));
		window.addEventListener('scroll', this.handleOnScroll.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize.bind(this));
		window.removeEventListener('scroll', this.handleOnScroll.bind(this));
	}

	handleResize() {
		this.setState({windowHeight: window.innerHeight});
	}

	handleOnScroll() {
		this.setState({windowTop: window.pageYOffset});
	}

	render() {
		return(
			<div>
				<Splash windowHeight={this.state.windowHeight}/>
				
				<StickyNav windowHeight={this.state.windowHeight} windowTop={this.state.windowTop}/>

				<Developer />

			</div>
		);
	}
}

export default Main;