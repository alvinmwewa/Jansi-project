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

logoutUser = (e) => {
    e.preventDefault();
    Meteor.logout((err) => {
      if (err){
        console.log(err.reason);
      }
      else {
        FlowRouter.go('/')
      }
    }
    )
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
			    <li><a href='/contact' class="waves-effect">Contact</a></li>
			
      			  </ul>

			  <ul class="side-nav" id='slide-out'>
				<li><a href="/login">Login</a></li>
				<li><a href="/signup">Signup</a></li>
			    <li><div class="divider"></div></li>
			    <li><a href='/profile' class="waves-effect waves-light">Profile</a></li>
          <li><a href='/' onClick={e =>this.logoutUser(e)} class="waves-effect waves-light">Logout</a></li>
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