import React, {Component} from 'react';
import VirtualBar from './VirtualBar';
import IngredientList from './IngredientList';
import Nutrition from './Nutrition';

class Create extends Component {

	constructor(props) {

		super(props)
	
		this.state = {
			almonds: false,
			raisins: false,
			peanuts: false,
			cashews: false,
			sunflower_seeds: false,
			chia_seeds: false,
			dried_cranberries: false,
			dried_goji_berries: false,
			chocolate_chips: false,
			penut_butter_chips: false,
		}

		// this.toggleStateOf = this.toggleStateOf.bind(this)
		this.toggleAlmonds = this.toggleAlmonds.bind(this)
		this.toggleRaisins = this.toggleRaisins.bind(this)
	}

	// toggleStateOf = (e) => {
	// 	console.log(e.currentTarget.id);
	// 	console.log("toggleStateOf was triggered");
	// 	const target = this.+ e.currentTarget.id;
	// 	console.log(target);
 //        // this.setState({
 //        //     e.currentTarget.id: !e.currentTarget.id
 //        // })
 //    }

 	toggleAlmonds = () => {
 		console.log("toggleAlmonds was triggered");
        const almonds = this.state.almonds;
        this.setState({
            almonds: !almonds
        })
    }

    toggleRaisins = () => {
 		console.log("toggleAlmonds was triggered");
        const raisins = this.state.raisins;
        this.setState({
            raisins: !raisins
        })
    }

	render(){

		return (
			
			<div id="create">
				<div className="virtual-bar">
					{this.state.almonds && <img src="https://i.imgur.com/EhTTk3k.png" className="ingredient-overlay"/>}
					{this.state.raisins && <img src="https://i.imgur.com/7nSe0Yl.png" className="ingredient-overlay" id="raisins"/>}
				</div>

				<div className="ingredient-list">
					<button onClick={this.toggleAlmonds} className="ingredient" id="almonds">Almonds</button>
					<button onClick={this.toggleRaisins} className="ingredient" id="raisins">Raisins</button>
					<button onClick={this.toggleStateOf} className="ingredient inactive" id="peanuts">Peanuts</button>
					<button onClick={this.toggleStateOf} className="ingredient inactive" id="cashews">Cashews</button>
					<button onClick={this.toggleStateOf} className="ingredient inactive" id="sunflower_seeds">Sunflower Seeds</button>
					<button onClick={this.toggleStateOf} className="ingredient inactive" id="chia_seeds">Chia Seeds</button>
					<button onClick={this.toggleStateOf} className="ingredient inactive" id="dried_cranberries">Dried Cranberries</button>
					<button onClick={this.toggleStateOf} className="ingredient inactive" id="dried_goji_berries">Dried Goji Berries</button>
					<button onClick={this.toggleStateOf} className="ingredient inactive" id="chocolate_chips">Chocolate Chips</button>
					<button onClick={this.toggleStateOf} className="ingredient inactive" id="peanuts_butter_chips">Penut Butter Chips</button>
				</div>

			</div>

		)
	}
}



export default Create;