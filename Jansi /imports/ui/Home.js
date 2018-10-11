import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.js';
import Property from '../api/collections/collections.js';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

class Home extends Component {


  componentDidMount(){
    $(document).ready(function(){
      $('.parallax').parallax();
    });
    
 }
  

	render(){
		return (
		<div>
		<div id="header1">
    <p>.



      .
    </p>
    <div id="divindiv">
    <div className="img">
   
		<img src="images/logoo.jpg" className="circle responsive-img" />
    </div>
			<h1 ><span style={{color:"rgb(17, 227, 243)"}}>SYBEN</span> <span style={{color:"#1b1bbd"}}> PLUMBING</span><span style={{color:"rgb(17, 227, 243)"}}>SOLUTIONS LTD</span></h1>
      </div>
		</div>
	<div id="search">
  <h3 id="blue">Search....</h3>
  <form className="example" action="/action_page.php">
  <input type="text" placeholder="Search.." name="search"/>
</form>
  </div>

	<div className="row">
					<div className="col s6">
          <p>

          </p>
          <div className="center">
          <img src="images/outside the shop-crop-u169.jpg"/>
          </div>
					</div>
					 <div className="col s6">
           <h1 id="blue"> US AT SPSL</h1>
            <p>Our knowledge of the decorative plumbing
               and hardware items we sell sets us high above the
                competition. Rick's Hardware & Plumbing is an authorized
                 dealer of such brands as Ador Inc., Americh, Amerock,
                  Ashley Norton, Atlas Homewares, and more. We can help 
                  you select your new decorative plumbing and hardware 
                  at any budge</p>
            <ul>
                <li>- Spray paint</li>
                <li>- Sandpaper</li>
                <li>- Tools</li>
                <li>- Lawn and garden supplies</li>
                <li>- Mailboxes</li>
                <li>- HVAC</li>
                <li>- Furnace filters</li>
                <li>- Cleaning supplies</li>
            </ul>










					</div>
			</div>

      <div className="row">
					<div className="col s6">
          <p>
            
          </p>
          <div className="center">
          <img src="images/20180906_081012-crop-u165.jpg"/>
          </div>
					</div>
					 <div className="col s6">
           <h3 id="blue">A Large Selection Of Hardware Supplies</h3>
            <p>If you need it on a farm, chances are we have it in 
              stock or can get it quickly. Among the many farm
               hardware items we offer are:</p>
            <ul>
                <li>- Fencing – Posts, Wire, Etc..</li>
                <li>- Gates</li>
                <li>- Corral Panels</li>
                <li>- Livestock Working Equipment</li>
                <li>- Feeders – Bunk feeders, hay rings, Etc.. (Including plastic hay rings)</li>
                <li>- Culverts – Metals & Plastic</li>
                <li>- Metal Roofing</li>
                <li>- And many more!!!!!</li>
            </ul>



					</div>
			</div>


<div class="parallax-container">
      <div class="parallax"><img src="images/D_construction_inspiration.jpg"/></div>
    </div>


      	<div className="row">
					<div className="col s6">
          <p>

          </p>
          <div className="center">
          <img src="images/Photo-May-15-3-31-42-PM.jpg"/>
          </div>
					</div>
					 <div className="col s6">
            <h2 id="blue">Opening hours</h2>
            <ul>
                <li>- Monday – Friday</li>
                <li>- 7:30am – 5:00pm</li>
                <li>- Saturday:</li>
                <li>- 7:30am - 12</li>
                <li>- Closed on Sundays</li>
              
            </ul>



					</div>
			</div>
		<Footer/>
		</div>

	)
	}
}

Home.propTypes = {
  blog: PropTypes.array.isRequired,
};

export default withTracker(()=> {
  Meteor.subscribe('blog');

  return {
    blog: Property.find({}).fetch(),
  };
}) (Home);


