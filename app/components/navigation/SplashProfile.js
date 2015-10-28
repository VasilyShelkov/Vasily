import React, { Component } from 'react';
import {Motion, spring, presets} from 'react-motion';

class SplashProfile extends Component {
	render() {
		var scale = this.props.showImg ? 1 : 0;
		return (
			<Motion style={{x: spring(scale, presets.wobbly)}}>
				{({x}) =>
					<div 
						style={{
							opacity: x,
							transform: `scale(${x})`,
							WebkitTransform: `scale(${x})`,
							display: x < 0.05 ? 'none' : 'block' 
						}} 
						>
						<div className="col-xs-12 valign-wrapper">
							<div className="hidden-xs-down col-sm-2 col-sm-5 col-md-4 col-xl-5">
								<div className="col-xs-8 col-xs-offset-2 col-sm-12 col-xl-8 col-xl-offset-4">
									<img src="images/me.jpg" className="circle responsive-img"/>
								</div>
							</div>

							<div className="col-xs-12 col-sm-7 col-md-8 col-xl-7">
								<h2 className="left-align">
									Vasily Shelkov
								</h2>
							</div>

						</div>
						<div className="col-xs-12 flow-text center-align">
							Scroll down 
							<a className="hover-color-change" href="public/VasilyCV.pdf" target="_blank" > or just view my résumé.</a>
						</div>
					</div>
				}
			</Motion>
		);
	}
}

export default SplashProfile;