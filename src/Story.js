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
				<div className="float-left">
					<div className="foreground tree1"></div>
				</div>
				<div className="float-right">
					<div className="foreground tree2"></div>
				</div>
			</div>

		)
	}
}



export default Story;