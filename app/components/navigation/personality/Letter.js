import React, { Component } from 'react';
import {spring, presets} from 'react-motion';
import SequentialMotion from '../../experimental/SequentialMotion';

class Letter extends Component {

	render() {
		var randomTop = 100;
		var randomLeft = 100;
		var animationStyles = [{
			left:0,
			top:0
		},{
			left:spring(randomLeft, presets.wobbly),
			top:spring(randomTop, presets.wobbly)
		},{
			left:spring(0, presets.wobbly),
			top:spring(0, presets.wobbly)
		}];
		return (
			<SequentialMotion styles={animationStyles}>
				{({left, top}) =>
					<span style={{
						transform: `translate(${left}px, ${top}px)`,
						WebkitTransform: `translate(${left}px, ${top}px)`,
						display: 'inline-block'
					}}>
						{this.props.letter}
					</span>
				}
			</SequentialMotion>
		);
	}
}

export default Letter;