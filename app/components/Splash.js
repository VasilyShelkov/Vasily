import React, { Component } from 'react';

class Splash extends Component{
	componentDidMount(){
		$('.parallax').parallax();
	}

	componentDidUpdate(){
		var position = $('#navBar').position();
		console.log(`window: ${this.props.windowTop}`);
		console.log(`nav: ${position.top}`);
		if (position.top < this.props.windowTop){
			$('#navBar').css({ 
				top: `${this.props.windowTop}px`,
				position: 'absolute'
			});
		}
	}

	render(){
		var overlayStyle = {
			backgroundColor: 'rgba(0,0,0,0.6)',
			height:this.props.windowHeight
		};
		var openCB = '{';
		var closedCB = '}';
		return (
			<div className="row">
				<div className="parallax-container valign-wrapper" style={overlayStyle}>
						<div className="parallax">
							<img src="images/unknown.jpg"/>
						</div>
					
					<div id="navBar" className="container white-text">
						<p className="flow-text center-align col-xs-12">
							{openCB} Developer, Explorer, Early Adopter, Anime Lover {closedCB}
						</p>

						<div className="col-xs-12 hidden-sm-up">
								<div className="col-xs-8 col-xs-offset-2">
									<img src="images/me.jpg" className="circle responsive-img"/>
								</div>
							</div>

						<div className="col-xs-12 valign-wrapper">
							<div className="hidden-xs-down col-sm-2 col-sm-4 col-md-4 col-xl-4">
								<div className="col-xs-8 col-xs-offset-2 col-sm-12 col-xl-6 col-xl-offset-6">
									<img src="images/me.jpg" className="circle responsive-img"/>
								</div>
							</div>
							<div className="col-xs-12 col-sm-8 col-md-8 col-xl-5">
								<h2 className="center-align">
									Vasily Shelkov
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Splash;