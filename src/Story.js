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
					<img className="foreground" src="https://i.imgur.com/zjmns2r.png"/>
				</div>
				<div className="float-right">
					<img className="foreground" src="https://i.imgur.com/muEHrSF.png"/>
				</div>
			</div>

		)
	}
}



export default Story;