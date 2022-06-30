import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Home Page</h1>
	<br />
	<ul>
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/">Home</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/aboutus">Aboutus</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/careers">Careers</Link>
		</li>
	</ul>
	</div>
);
};

export default Home;
