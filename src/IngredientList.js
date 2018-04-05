import React, {Component} from 'react';

class IngredientList extends Component {

	constructor(){
		super()
	
		this.state = {
		}
	}

	render(){

		return (
			<div className="ingredient-list">
				<h3 className="ingredient">Almonds</h3>
				<h3 className="ingredient">Peanuts</h3>
				<h3 className="ingredient">Cashews</h3>
				<h3 className="ingredient">Sunflower Seeds</h3>
				<h3 className="ingredient">Chia Seeds</h3>
				<h3 className="ingredient">Raisins</h3>
				<h3 className="ingredient">Dried Cranberries</h3>
				<h3 className="ingredient">Dried Goji Berries</h3>
				<h3 className="ingredient">Chocolate Chips</h3>
				<h3 className="ingredient">Penut Butter Chips</h3>
			</div>
		)
	}
}



export default IngredientList;