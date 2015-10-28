import React, { Component } from 'react';
import {StaggeredMotion, spring, presets} from 'react-motion';

class SectionsNav extends Component {
	render() {
		var navbarDefaults = [
			{
				width: 0,
				padding: 0,
				name: 'Home',
				href: '#home',
				textColor: 'red-text',
				icon: 'fa fa-home'
			},{
				width: 0,
				padding: 0,
				name: 'Work',
				href: '#',
				textColor: 'deep-orange-text',
				icon: 'fa fa-briefcase'
			}, {
				width: 0,
				padding: 0,
				name: 'Project',
				href: '#',
				textColor: 'yellow-text',
				icon: 'fa fa-paper-plane'
			}, {
				width: 0,
				padding: 0,
				name: 'Skills',
				href: '#',
				textColor: 'light-green-text',
				icon: 'fa fa-child'
			}, {
				width: 0,
				padding: 0,
				name: 'Résumé',
				href: '#',
				textColor: 'green-text text-darken-3',
				icon: 'fa fa-file-text'
			}
		];
		return (
			<StaggeredMotion
				defaultStyles={navbarDefaults}
				styles={prevStyles => prevStyles.map((style) => {
					if (this.props.showImg) {
						style.width = spring(1, [75,7]);
						style.padding ='inherit';
					} else {
						style.width = spring(0, presets.stiff);
						style.padding = 0;
					}
					return style;
				})}>
					{interpolatedStyles => 
						<div className="col-sm-12">
							{interpolatedStyles.map((style, i) => 
								<a key={i} 
									href={style.href}
									style={{
										transform: `scaleX(${style.width})`,
										WebkitTransform: `scaleX(${style.width})`,
										padding: style.padding
									}}
								className={`waves-effect waves-light btn-flat btn-large col-xs-2 ${i == 0 ? 'col-xs-offset-1': ''} ${style.textColor}`}>
									<i className={style.icon}> {style.name}</i>
								</a>	
							)} 
						</div>
					}
			</StaggeredMotion>
		);
	}
}

export default SectionsNav;