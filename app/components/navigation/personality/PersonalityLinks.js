import React, { Component } from 'react';
import Letter from './Letter';

class PersonalityLinks extends Component {
	render() {
		var openCB='{';
		var closedCB = '}';
		
		var personalities = ['Developer,','Explorer, ','Early-Adopter, ','Anime-Lover'].map((personality, index) => {
			var personalityLetters = personality.split('').map((letter, index) => {
				return (
					<Letter letter={letter} key={index}/>
				);
			});
			var noComma = personality.replace(',', '');
			return (
				<a key={index} href={`#profile/${noComma}`}>
					{personalityLetters} 
				</a>
			);
		});
		return (
			<div id="personalities" className="flow-text col-xs-10 center-align valign">
				{openCB}
				{personalities}
				{closedCB}
			</div>
		);
	}
}

export default PersonalityLinks;