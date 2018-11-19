import React, {Component} from 'react';
import Image from 'react-image-resizer';
import Footer from './Footer.js';

class About extends Component{

componentDidMount(){

$(document).ready(function(){
    $('.carousel').carousel();
  });

$('.carousel.carousel-slider').carousel({fullWidth: true});
}

	render(){
		return(
		<div class=''>
			<div class='row'> 
				<div class="col s12" id='row-1'>
					
				</div>
    			</div>
		<h1 className="center">SYBEN PLUMBING SOLUTION LTD</h1>
		<Footer/> 	
		</div>
	

        )
	}
	

}

export default About
