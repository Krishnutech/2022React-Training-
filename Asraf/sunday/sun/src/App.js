import React, { Component } from 'react';
import './App.css';
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Redirect,
//   } from "react-router-dom";
	
  // import Home component
  import Home from "./components/Home";
  // import About component

  // import ContactUs component

function App() {


	return (
  
		<div className='nav'>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src=
"https://nutech.lat/wp-content/uploads/2020/10/NU-logo1.png" />
					</div>
					<li><a href="#Home">Home</a></li>
					<li><a href="#Technology">Technology</a></li>
					<li><a href="#Aboutus">Aboutus</a></li>
					<li><a href='#Careers'>Careers</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							 Best place To Speed Up Your career
							 in 2022
						</h1>
						<p class="text-small">
              <br></br>
            NU Technology is one of the leading technology solution providers in the services, manufacturing and finance industries. With our exceptional expertise in various software development platforms and by being immersed in the essentials of the industry, we strive to be the best in reliability, quality and support.
						We, NU Technology, are a Salesforce commerce cloud implementation company with certified Demandware experts. The team is proficient in Salesforce commerce cloud cartridge development, Pipeline migration to Store Front Reference Architecture (SFRA), automated monitoring, continuous integration and continuous development based e-commerce test automation and more
            </p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							NU TECHNOLOGY
						</h1>
						<p class="text-small">
              <br></br>
            We strive for excellence in pursuit of our clients, being our main objective to fulfill what is proposed at any cost
            We are a single team
           We take care of our NU family by encouraging them to provide excellent service, so we always give our maximum potential in benefit of our customers.
           NUs e-commerce experts can help you strategize on how best to optimize your OC/ATG investment. By evaluating your current platform configuration and features and comparing them to the world’s leading stores, we can help you establish your platform roadmap in terms of which features to add, which to iterate, how to get more value out of the ATG platform, and whether it may be time to start a rethinking exercise for the cloud.
            </p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Best place to learn new things
						</h1>
						<p class="text-small">
            NU Technology provides your business the desired outlook and results by delivering high quality and effective IT services and solutions. We constantly strive to reinvent ourselves and provide standardized solutions.
						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				
				</p>
			</footer>
		</div>	)
}


export default App
