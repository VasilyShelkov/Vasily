import React, { Component } from 'react';
import PersonalityNav from './PersonalityNav';
import SplashProfile from './SplashProfile';


class StickyNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			originalPosition: '0',
			showImg: true
		};
	}

	componentDidMount() {
		this.setState({
			originalPosition: $('#navBar').position().top
		});
	}

	componentDidUpdate(){
		if (this.state.originalPosition < this.props.windowTop){
			this.state.showImg ? this.setState({showImg: !this.state.showImg}) : this.state.showImg;
			$('#navBar').css({ 
				position: 'fixed',
				top: '0'
			});
		} else {
			!this.state.showImg ? this.setState({showImg: !this.state.showImg}) : this.state.showImg;
			$('#navBar').css({ 
				position: 'absolute',
				top: this.state.originalPosition
			});
		}
	}

	render(){
		var stickyNavStyle = {
			position:'absolute', 
			top: '30%',
			marginLeft:'auto',
			marginRight:'auto',
			left:'0',
			right:'0'
		};
		return (
			<div id="navBar" style={stickyNavStyle}>
				<div className="container white-text">
					<PersonalityNav />

					<div className="col-xs-12 hidden-sm-up">
						<div className="col-xs-8 col-xs-offset-2">
							<img id="me" src="images/me.jpg" className="circle responsive-img"/>
						</div>
					</div>

					<SplashProfile showImg={this.state.showImg} />
				</div>


			</div>
		);
	}
}

export default StickyNav;