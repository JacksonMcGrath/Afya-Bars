import React, {Component} from 'react';

class Story extends Component {

	componentDidMount(){
		window.addEventListener("scroll", this.handleScroll)
	}

	componentWillUnmount(){
		window.removeEventListener("scroll", this.handleScroll)
	}

	constructor(){
		super()
	
		this.state = {
			
		}

		this.handleScroll = this.handleScroll.bind(this)
	}

	handleScroll = () => {

    // LEFT SIDE

    let tree1 = document.querySelector(".tree1");
    tree1.style.margin = -(window.pageYOffset * 2.85) + 'px ' + -(window.pageYOffset * 1.55) + 'px';
    tree1.style.width = (500 + (window.pageYOffset * .85)) + 'px';

    let tree3 = document.querySelector(".tree3");
    tree3.style.margin = (200 -(window.pageYOffset * 1.25)) + 'px ' + -(window.pageYOffset * 1.25) + 'px';
    tree3.style.width = (400 + (window.pageYOffset * .65)) + 'px';
    tree3.style.height = (400 + (window.pageYOffset * .65)) + 'px';

    let tree5 = document.querySelector(".tree5");
    tree5.style.margin = (380 -(window.pageYOffset * .95)) + 'px ' + -(window.pageYOffset * .85) + 'px';
    tree5.style.width = (370 + (window.pageYOffset * .85)) + 'px';
    tree5.style.height = (370 + (window.pageYOffset * .85)) + 'px';

    // RIGHT SIDE

    let tree2 = document.querySelector(".tree2");
    tree2.style.margin = -(window.pageYOffset * 2.5) + 'px ' + (window.pageYOffset * .15) + 'px';
    tree2.style.width = (500 + (window.pageYOffset * .85)) + 'px';
    tree2.style.height = (500 + (window.pageYOffset * .85)) + 'px';

    let tree4 = document.querySelector(".tree4");
    tree4.style.margin = (250 -(window.pageYOffset * 1.15)) + 'px ' + (window.pageYOffset * .55) + 'px';
    tree4.style.width = (500 + (window.pageYOffset * .65)) + 'px';
    tree4.style.height = (500 + (window.pageYOffset * .65)) + 'px';

    let tree6 = document.querySelector(".tree6");
    tree6.style.margin = (540 -(window.pageYOffset * .95)) + 'px ' + -(window.pageYOffset * .75) + 'px';
    tree6.style.width = (300 + (window.pageYOffset * .65)) + 'px';
    tree6.style.height = (300 + (window.pageYOffset * .65)) + 'px';

    // OTHER LAYERS

    let hill1 = document.querySelector(".hill1");
    // hill1.style.margin = (100 + (window.pageYOffset * .45)) + 'px 0 0 0';

    let tagline = document.querySelector(".tagline");
    tagline.style.margin = (window.pageYOffset * .15) + 'px 0 0 0';

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
				<div className="first-break"></div>
		        <div className="tagline">
		          <h1>Welcome to a clean and healthy lifestyle</h1>
		        </div>
		        <div className="hill1">
		          <div className="second-break"></div>
		          <h1 className="onwhite">The choice is yours</h1>
		        </div>
			</div>

		)
	}
}



export default Story;