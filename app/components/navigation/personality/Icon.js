import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

class Icon extends Component {
	render() {
		var iconDefaultStyle = {
			rotate:720,
			scale:0
		};
		var iconAnimatedStyle = {
			rotate:spring(0, [50,5]),
			scale:spring(1, [50,5])
		};
		return (
			<Motion defaultStyle={iconDefaultStyle} style={iconAnimatedStyle}>
				{({rotate, scale}) =>
					<div style={{
						scale: scale,
						transform: `rotate(${-rotate}deg) scale(${scale})`,
						WebkitTransform: `rotate(${-rotate}deg) scale(${scale})`}}>
						<a href={this.props.href}
							target={this.props.target}
							className={this.props.className} 
							style={this.props.style}></a>
					</div>
				}
			</Motion>
		);
	}
}

export default Icon;