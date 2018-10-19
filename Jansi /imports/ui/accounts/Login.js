import React, {Component } from 'react';
import {meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import Footer from '../Footer.js';



class Login extends React.Component{

	loginUser = e => {
	  e.preventDefault();
	  const {target} = e;
	  const password = target.password.value;
	  const email = target.email.value;

	  Meteor.loginWithPassword(email,password,(err) => {
	    if (err) {
	      console.log(error.reason);
	      }
	      else {
	        FlowRouter.go('/')
	      }
	    }
	  );
	}


	render(){
		return(
			<div>
				<div id="search">
				<input id="icon_prefix" type="text" class="validate" name='searchtext' onChange={this.handleSearch}/>
				<button class="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">Search
					    <i class="material-icons right">search</i>
					  </button></div>
				<h3 id="h3stoke">promotions and discount ADs comes here</h3>
				<div id="stokeheader">
				<div id="divindiv">
				<div className="centerimg"><img src="images/syben logo 1.jpg" className="circle responsive-img" /></div>
					<h1 className="center" >WHAT WE<span style={{color:"#1b1bbd"}}> HAVE IN STOKE</span></h1></div></div>
					<div class="row">
  <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/20180818_101050.jpg"/>
        <span class="card-title activator white-text"></span>
      </div>
      <div class="card-content">
        <p>Im still not at the level I would like to be, but I'm growing 
          my developer skills each day thanks to Hackers Guild!!!</p>
        	<h3>only <span id="blue">K99.99</span></h3>
					<button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to favorite</button>
      </div>
    </div>
  </div>
   <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/20180806_134936.jpg"/>
        <span class="card-title activator white-text"></span>
      </div>
      <div class="card-content">
                <p>Im still not at the level I would like to be, but I'm growing 
          my developer skills each day thanks to Hackers Guild!!!</p>
					<h3>only <span id="blue">K99.99</span></h3>
					<button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to favorite</button>
      </div>
    </div>
  </div>
  <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/20180820_090337.jpg"/>
        <span class="card-title activator white-text"></span>
      </div>
      <div class="card-content">
                <p>Im still not at the level I would like to be, but I'm growing 
          my developer skills each day thanks to Hackers Guild!!!</p>
					<h3>only <span id="blue">K99.99</span></h3>
					<button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
      </div>
    </div>
  </div>
</div>


{/* supplies line two */}

			<div class="row">
  <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
        <span class="card-title activator white-text">Jackie Chapoloko</span>
      </div>
      <div class="card-content">
        <p>Im still not at the level I would like to be, but I'm growing 
          my developer skills each day thanks to Hackers Guild!!!</p>
        <a href="#" class='center' ><img src="images/twitter.png"  alt="twitter icon"/></a>
	<a href="#" class='center'><img src="images/github.png"  alt="github icon"/></a>
	<a href="#" class='center'><img src="images/email.png"  alt="email icon"/></a>
      </div>
    </div>
  </div>
   <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
        <span class="card-title activator white-text">Alvin Mwewa</span>
      </div>
      <div class="card-content">
                <p>Im still not at the level I would like to be, but I'm growing 
          my developer skills each day thanks to Hackers Guild!!!</p>
        <a href="#" class='center' ><img src="images/twitter.png"  alt="twitter icon"/></a>
	<a href="#" class='center'><img src="images/github.png"  alt="github icon"/></a>
	<a href="#" class='center'><img src="images/email.png"  alt="email icon"/></a>
      </div>
    </div>
  </div>
  <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
        <span class="card-title activator white-text">Grace Banda</span>
      </div>
      <div class="card-content">
                <p>Im still not at the level I would like to be, but I'm growing 
          my developer skills each day thanks to Hackers Guild!!!</p>
        <a href="#" class='center' ><img src="images/twitter.png"  alt="twitter icon"/></a>
	<a href="#" class='center'><img src="images/github.png"  alt="github icon"/></a>
	<a href="#" class='center'><img src="images/email.png"  alt="email icon"/></a>
      </div>
    </div>
  </div>
</div>

				 <Footer/>
			</div>
		);
	}

}

export default Login;
