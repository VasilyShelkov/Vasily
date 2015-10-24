import React, { Component } from 'react';
import {Motion} from 'react-motion';

class SequentialMotion extends Component {
	constructor(props){
		super(props);
		this.state = {
			i: 0
		};
	}

	componentDidMount() {
		//add some kind of callback to animationEnded
	}

	animationEnded() {
		if(this.state.i < this.props.styles.length){
			this.setState({
				i: this.state.i++
			});
		}
	}

	render() {
		return (
			<Motion style={this.props.styles[this.state.i]}>
				{this.props.children}
			</Motion>
		);
	}
}

export default SequentialMotion;