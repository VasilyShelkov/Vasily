import React, { Component } from 'react';

class Splash extends Component{
	componentDidMount(){
		$('.parallax').parallax();
	}

	render(){
		var overlayStyle = {
			backgroundColor: 'rgba(0,0,0,0.6)',
			height:this.props.windowHeight
		};
		var downStyle = {
			color:'white', 
			fontSize:'10em',
			position:'absolute',
			marginLeft:'auto',
			marginRight:'auto',
			left:'0',
			right:'0',
			bottom: '0'
		};
		return (
			<div className="parallax-container" style={overlayStyle}>
				<div className="parallax">
					<img src="images/unknown.jpg"/>
				</div>
				<a href="#">
					<i className="fa fa-angle-double-down faa-bounce animated faa-slow center-align" style={downStyle}></i>
				</a>
			</div>
		);
	}
}

export default Splash;