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
        <p>name of the product and other stuff here ......!!!!!</p>
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
                <p>name of the product and other stuff here ......!!!!!</p>
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
                <p>name of the product and other stuff here ......!!!!!</p>
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
        <img src="images/20180818_101043.jpg"/>
   
      </div>
      <div class="card-content">
        <p>name of the product and other stuff here ......!!!!!</p>
        	<h3>only <span id="blue">K99.99</span></h3>
          <button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
      </div>
    </div>
  </div>
   <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
        
      </div>
      <div class="card-content">
                <p>name of the product and other stuff here ......!!!!!</p>
                <h3>only <span id="blue">K99.99</span></h3>
          <button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
        
      </div>
    </div>
  </div>
  <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
        
      </div>
      <div class="card-content">
                <p>name of the product and other stuff here ......!!!!!</p>
                <h3>only <span id="blue">K99.99</span></h3>
          <button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
      </div>
    </div>
  </div>
</div>

{/* supplies line three */}

			<div class="row">
  <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
   
      </div>
      <div class="card-content">
        <p>name of the product and other stuff here ......!!!!!</p>
        	<h3>only <span id="blue">K99.99</span></h3>
          <button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
      </div>
    </div>
  </div>
   <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
        
      </div>
      <div class="card-content">
                <p>name of the product and other stuff here ......!!!!!</p>
                <h3>only <span id="blue">K99.99</span></h3>
          <button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
        
      </div>
    </div>
  </div>
  <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
        
      </div>
      <div class="card-content">
                <p>name of the product and other stuff here ......!!!!!</p>
                <h3>only <span id="blue">K99.99</span></h3>
          <button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
      </div>
    </div>
  </div>
</div>

{/* supplies line four */}

			<div class="row">
  <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
   
      </div>
      <div class="card-content">
        <p>name of the product and other stuff here ......!!!!!</p>
        	<h3>only <span id="blue">K99.99</span></h3>
          <button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
      </div>
    </div>
  </div>
   <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
        
      </div>
      <div class="card-content">
                <p>name of the product and other stuff here ......!!!!!</p>
                <h3>only <span id="blue">K99.99</span></h3>
          <button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
        
      </div>
    </div>
  </div>
  <div class="col m4">
    <div class="card">
      <div class="card-image">
        <img src="images/card.jpg"/>
        
      </div>
      <div class="card-content">
                <p>name of the product and other stuff here ......!!!!!</p>
                <h3>only <span id="blue">K99.99</span></h3>
          <button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">add to Chat</button>
      </div>
    </div>
  </div>
</div>
<p classsName="center"> <span id="blue">we are found at road number bla bla balyou can call us on 78340560823754504549
 for more informtion call our customer service line on 83276048762 or
  73643098476783 or text use on whats aapp on 7362394738426304896</span></p>
				 <Footer/>
			</div>
		);
	}

}

export default Login;
