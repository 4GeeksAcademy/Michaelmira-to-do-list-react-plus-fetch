import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="template text-center bg-black vh-100 ">
			<div className="container bg-light mt-5 ">
				<div className="card-body">
					<h5 className="card-title">Card Title</h5>
					<p className="card-text">Your content goes here. It can be as long or as short as you need.</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
