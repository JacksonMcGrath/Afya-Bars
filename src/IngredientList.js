import React, {Component} from 'react';

class IngredientList extends Component {

	constructor(){
		super()
	
		this.state = {
			more: false,
		}
	}

	render(){

		return (
			<div className="ingredient-list">
				<ul className="ingredient-list">
					<h2>IngredientList</h2> 
				</ul>
			</div>
		)
	}
}



export default IngredientList;