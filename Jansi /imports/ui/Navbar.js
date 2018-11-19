import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';
import Image from 'react-image-resizer';


class Navbar extends Component{

componentDidMount(){
  $(document).ready(function(){

	$('.sidenav-trigger').sideNav({
	      menuWidth: 300,
	      edge: 'left',
	      closeOnClick: true
	    }
	  );

  });


}


	render(){

		return(

			<div>
			<nav  id="footer" class=" nav-wrapper">

			  <a href="/" class="brand-logo center" id='nav-content'>
				
			  	
			  </a>
			  <ul id="nav-mobile" class="right hide-on-med-and-down">
				<li><a href="/" class="waves-effect">Home</a></li>
			    <li><a href='/about' class="waves-effect">About</a></li>
			    <li><a href='/contact' class="waves-effect">Make an Order</a></li>
			
      			  </ul>

			  <ul class="side-nav" id='slide-out'>
				<li><a href="/" class="waves-effect">Home</a></li>
			  <li><a href='/about' class="waves-effect">About</a></li>
				<li><a href="/signup">Subscribe</a></li>
			    <li><div class="divider"></div></li>
			    {/* <li><a href='/profile' class="waves-effect waves-light">Profile</a></li> */}
					<li><a href="/login">Supplies</a></li>
					<li><a href='/contact' class="waves-effect">Make an Order</a></li>
			  </ul>

			  <a data-activates="slide-out" class="sidenav-trigger light-blue lighten-2" href="#!">
			    <i class="material-icons">menu</i>
			  </a>
			</nav>
			</div>


		)
	}
}



export default Navbar
