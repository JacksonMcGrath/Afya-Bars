import React, {Component} from 'react';

class Story extends Component {
	constructor(){
		super()
	
		this.state = {
			
		}
	}

	render(){

		return (
			<div id="story">
				<h1 onClick={this.toggleHome}>Afya Bars</h1>
				<div className="scene">
					
				</div>
			</div>
		)
	}
}



export default Story;