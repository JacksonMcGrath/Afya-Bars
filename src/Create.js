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
				<VirtualBar/>
				<IngredientList/>
			</div> 

		)
	}
}



export default Create;