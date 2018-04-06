import React, {Component} from 'react';

class IngredientList extends Component {

	constructor() {
		super()
	
		this.state = {

		}

	}

	render(){

		return (
			<div className="ingredient-list">
				<h3 onClick={this.toggleStateOf} className="ingredient" id="almonds">Almonds</h3>
				<h3 onClick={this.toggleStateOf} className="ingredient" id="peanuts">Peanuts</h3>
				<h3 onClick={this.toggleStateOf} className="ingredient" id="cashews">Cashews</h3>
				<h3 onClick={this.toggleStateOf} className="ingredient" id="sunflower_seeds">Sunflower Seeds</h3>
				<h3 onClick={this.toggleStateOf} className="ingredient" id="chia_seeds">Chia Seeds</h3>
				<h3 onClick={this.toggleStateOf} className="ingredient" id="raisins">Raisins</h3>
				<h3 onClick={this.toggleStateOf} className="ingredient" id="dried_cranberries">Dried Cranberries</h3>
				<h3 onClick={this.toggleStateOf} className="ingredient" id="dried_goji_berries">Dried Goji Berries</h3>
				<h3 onClick={this.toggleStateOf} className="ingredient" id="chocolate_chips">Chocolate Chips</h3>
				<h3 onClick={this.toggleStateOf} className="ingredient" id="peanuts_butter_chips">Penut Butter Chips</h3>
			</div>
		)
	}
}



export default IngredientList;