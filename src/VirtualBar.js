import React, {Component} from 'react';

class VirtualBar extends Component {

	constructor(){
		super()
	
		this.state = {
			base: true,
			lyr1: false,
			lyr2: false,
			lyr3: false,
			lyr4: false,
			lyr5: false,
			lyr6: false,
			lyr7: false,
			lyr8: false,
			lyr9: false,
			lyr10: false,
			lyr11: false,
			lyr12: false,
		}
	}

	render(){

		return (
			<div className="virtual-bar">
				{this.state.base && <img src="" className="base"><img>}
				{this.state.lyr1 && <img src="" className="lyr1"><img>}
				{this.state.lyr2 && <img src="" className="lyr2"><img>}
				{this.state.lyr3 && <img src="" className="lyr3"><img>}
				{this.state.lyr4 && <img src="" className="lyr4"><img>}
				{this.state.lyr5 && <img src="" className="lyr5"><img>}
				{this.state.lyr6 && <img src="" className="lyr6"><img>}
				{this.state.lyr7 && <img src="" className="lyr7"><img>}
				{this.state.lyr8 && <img src="" className="lyr8"><img>}
				{this.state.lyr9 && <img src="" className="lyr9"><img>}
				{this.state.lyr10 && <img src="" className="lyr10"><img>}
				{this.state.lyr11 && <img src="" className="lyr11"><img>}
				{this.state.lyr12 && <img src="" className="lyr12"><img>}
			</div>
		)
	}
}



export default VirtualBar;