import React, { Component } from 'react';

class Developer extends Component {
	render() {
		return (
			<div id="profile" className="row">
				<h1 className="center-align">I AM A...DEVELOPER</h1>
				
				<div className="col-xs-12 col-sm-6 valign-wrapper">
					<div className="col-xs-12 valign">
						<h2 className="center-align">Design</h2>
						<p className="flow-text center-align">design quote</p>
					</div>
				</div>
				
				<div className="col-xs-12 col-sm-6 valign-wrapper">
					<div className="col-xs-12 valign">
						<h2 className="center-align">Implement</h2>
						<p className="flow-text center-align">implementation quote</p>
					</div>
				</div>
				
				<div className="col-xs-12 col-sm-6 valign-wrapper">
					<div className="col-xs-12 valign">
						<h2 className="center-align">Test</h2>
						<p className="flow-text center-align">
							"TDD - ALL CODE IS GUILTY UNTIL PROVEN INNOCENT"
						</p>
					</div>
				</div>

				<div className="col-xs-12 col-sm-6 valign-wrapper">
					<div className="col-xs-12 valign">
						<h2 className="center-align">Maintain</h2>
						<p className="flow-text center-align">maintenance quote</p>
					</div>
				</div>


			</div>
		);
	}
}

export default Developer;