import React, { Component } from 'react';
import PersonalityLinks from './PersonalityLinks';
import Icon from './Icon';

class PersonalityNav extends Component {
	render() {
		var iconStyle = {
			fontSize: '3em'
		};
		return (
			<div className="col-sm-12 valign-wrapper">
				<div className="col-xs-1 center-align" style={iconStyle}>		
					<Icon href="https://uk.linkedin.com/in/vasilyshelkov"  
						target="_blank" 
						className="fa fa-linkedin-square" 
						style={{color:'orchid'}}/>

					<Icon href="https://github.com/VasilyShelkov" 
						target="_blank"
						className="fa fa-github" 
						style={{color:'orangered'}}></Icon>
				</div> 
				
				<PersonalityLinks />

				<div className="col-xs-1 center-align" style={iconStyle}>
					<Icon href="mailto:vasilydshelkov@gmail.com" 
						className="fa fa-envelope" 
						style={{color:'yellowgreen'}}></Icon>

					<Icon href="skype:vasilyshelkov?add" 
						className="fa fa-skype" 
						style={{color:'lightblue'}}></Icon>
				</div>
			</div>
		);
	}
}

export default PersonalityNav;