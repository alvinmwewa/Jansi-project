import React, {Component } from 'react';
import {meteor} from 'meteor/meteor';
import Footer from '../Footer.js';

class Signup extends React.Component{
	newUser = e =>{
	     e.preventDefault()
	     const {target} = e;
	     const name = target.name.value
	      const password= target.password.value
	       const email= target.email.value
				 const surname = target.surname.value
				 const city = target.city.value
	        const profile = {
	          email,
	          name,
						surname,
						city,
	        };
	        const user = {
	          email,password,
	          profile,
	        }

	        Accounts.createUser(user, (err) =>{
	          if (err)
	          {
	            console.log(err.reason);
	          }
	          else {
	        FlowRouter.go('/')
	         }
	       }
	      );
			}
	render(){
		return(
			<div class = "contact-pic">
  				 
      
 			<div class="row">
      				
      				<div id='contact' class="col s8 offset-s2 white">
					<div id="blue">
					<div className="center"><img src="images/syben logo 1.jpg" className="circle responsive-img" /></div>
					<h1 class="flow-text" id='center'align="center">Sign up to <span style={{color:"#1b1bbd"}}>our newsletters</span></h1>
					</div>
					<form class="col s12">
      					<div class="row">
						<div class="input-field col s6">
						  <i class="material-icons prefix">account_circle</i>
						  <input id="icon_prefix" type="text" class="validate"/>
						  <label for="icon_prefix">First Name</label>
						</div>
						<div class="input-field col s6">
						  <i class="material-icons prefix">email</i>
						  <input id="icon_email" type="email" class="validate"/>
						  <label for="icon_email">Email</label>
						</div>
					</div>
					<div class="row">
                          <div class="input-field col s12">

			  	<button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">Subscribe
					    <i class="material-icons right">send</i>
				</button>
                          </div>
                        </div>
    					</form>
				</div>
    			</div>
            
		</div>

			
		);
	}

}

export default Signup;
