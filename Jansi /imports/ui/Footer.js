import React, {Component} from 'react';

class Footer extends Component{

	render(){
		return(
			<div>
		<div class='row'>
				<div class="col s12">

				</div>
		</div>
			<footer  id="footer" class="page-footer ">
			  <div class="container">
			    <div class="row">
			      <div class="col l6 s12">
				<h5 class="white-text">SYBEN PLUMBING SOLUTIONS LIMITED</h5>
				<p class="grey-text text-lighten-4">
				Get all the hardware supplies required for cleaning,
				 caulking, paint sundries, and more at Nohren's Hardware.
				  You can trust our local, family-owned and operated company 
					for high-quality hardware.
				</p>
			      </div>
			      <div class="col l4 offset-l2 s12">
				<h5 class="white-text">Navigation</h5>
				<ul>
				  <li><a class="grey-text text-lighten-3" href='/about'>About Us</a></li>
				  <li><a class="grey-text text-lighten-3" href='/contact'>Make an Order</a></li>
				  <li><a class="grey-text text-lighten-3" href='/login'>Supplies</a></li>
				  <li><a class="grey-text text-lighten-3" href='/signup'>Subcribe</a></li>
				</ul>
			      </div>
			    </div>
			  </div>
			  <div class="footer-copyright">
			    <div class="container">
			    Copyright © 2018 SYBEN PLUMBING SOLUTIONS LIMITED
			    <a class="grey-text text-lighten-4 right" href='/'>SPSL</a>
			    </div>
			  </div>
			</footer>
			</div>

		)
	}
}

export default Footer
