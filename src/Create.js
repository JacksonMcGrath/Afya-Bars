import React, {Component} from 'react';
import VirtualBar from './VirtualBar';
import IngredientList from './IngredientList';
import Nutrition from './Nutrition';

class Create extends Component {

	constructor(){

		super()
	
		this.state = {
			almonds: false,
			peanuts: false,
			cashews: false,
			sunflower_seeds: false,
			chia_seeds: false,
			raisins: false,
			dried_cranberries: false,
			dried_goji_berries: false,
			chocolate_chips: false,
			penut_butter_chips: false,
		}
	}

	render(){

		return (
			
			<div id="create">
				<VirtualBar almonds={this.almonds} peanuts={this.peanuts} cashews={this.cashews} sunflower_seeds={this.sunflower_seeds} chia_seeds={this.chia_seeds} raisins={this.raisins} dried_cranberries={this.dried_cranberries} dried_goji_berries={this.dried_goji_berries} chocolate_chips={this.chocolate_chips} penut_butter_chips={this.penut_butter_chips}/>
				<IngredientList almonds={this.almonds} peanuts={this.peanuts} cashews={this.cashews} sunflower_seeds={this.sunflower_seeds} chia_seeds={this.chia_seeds} raisins={this.raisins} dried_cranberries={this.dried_cranberries} dried_goji_berries={this.dried_goji_berries} chocolate_chips={this.chocolate_chips} penut_butter_chips={this.penut_butter_chips}/>
			</div> 

		)
	}
}



export default Create;