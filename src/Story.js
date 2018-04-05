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
					<div className="tree1"></div>
					<div className="tree3"></div>
					<div className="tree5"></div>
				</div>
				<div className="float-right">
					<div className="tree2"></div>
					<div className="tree4"></div>
					<div className="tree6"></div>
				</div>
			</div>

		)
	}
}



export default Story;