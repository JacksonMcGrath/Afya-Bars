import React, {Component} from 'react';
import VirtualBar from './VirtualBar';
import IngredientList from './IngredientList';
import Nutrition from './Nutrition';

class Create extends Component {

	constructor(props) {

		super(props)
	
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

		this.toggleStateOf = this.toggleStateOf.bind(this)
	}

	toggleStateOf = (e) => {
		// console.log(e.currentTarget.id);
		console.log("toggleStateOf was triggered");
    }

	render(){

		return (
			
			<div id="create">
				<VirtualBar 
					almonds={this.state.almonds} 
					peanuts={this.state.peanuts} 
					cashews={this.state.cashews} 
					sunflower_seeds={this.state.sunflower_seeds} 
					chia_seeds={this.state.chia_seeds} 
					raisins={this.state.raisins} 
					dried_cranberries={this.state.dried_cranberries} 
					dried_goji_berries={this.state.dried_goji_berries} 
					chocolate_chips={this.state.chocolate_chips} 
					penut_butter_chips={this.state.penut_butter_chips}
				/>

				<IngredientList 
					toggleStateOf={this.toggleStateOf}
				/>

			</div>

		)
	}
}



export default Create;