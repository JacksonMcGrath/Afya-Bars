import React, {Component} from 'react';
import VirtualBar from './VirtualBar';
import IngredientList from './IngredientList';
import Nutrition from './Nutrition';

class Create extends Component {
	constructor(){
		super()
	
		this.state = {
			
		}
	}

	render(){

		return (
			
			<div id="create">
				<div className="builder">
					<div className="builder-top">
						<div className="virtual-bar">
							<VirtualBar/>
						</div>
						<div className="ingredient-list">
							<IngredientList/>
						</div>
					</div>
					<div className="nutrition">
						<Nutrition/>
					</div>
				</div> 
			</div> 

		)
	}
}



export default Create;