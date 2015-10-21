import React, { Component } from 'react';

class PersonalityNav extends Component {
	componentDidMount() {

	}

	render() {
		var openCB = '{';
		var closedCB = '}';
		var iconStyle = {
			fontSize: '3em'
		};
		return (
			<div className="col-xs-12 valign-wrapper">
				<div className="col-xs-2 center-align" style={iconStyle}>
					<div>
					<a href="https://uk.linkedin.com/in/vasilyshelkov" 
						target="_blank"
						className="fa fa-linkedin-square" 
						style={{color:'orchid'}}></a>
					</div>
					<div>
					<a href="https://github.com/VasilyShelkov" 
						target="_blank"
						className="fa fa-github" 
						style={{color:'orangered'}}></a>
					</div>
				</div> 
				
				<p className="flow-text center-align col-xs-8 valign">
					{openCB} <b>Developer, Explorer, Early-Adopter, Anime-Lover</b> {closedCB}
				</p>

				<div className="col-xs-2 center-align" style={iconStyle}>
					<div>
						<a href="mailto:vasilydshelkov@gmail.com" 
							className="fa fa-envelope" 
							style={{color:'yellowgreen'}}></a>
					</div>
					<div>
						<a href="skype:vasilyshelkov?add" 
							className="fa fa-skype" 
							style={{color:'lightblue'}}></a>
					</div>
				</div>
			</div>
		);
	}
}

export default PersonalityNav;