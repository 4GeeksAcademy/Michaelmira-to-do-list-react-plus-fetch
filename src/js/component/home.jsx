import React from "react";

import ToDo from "./ToDo";

//create your first component
const Home = () => {
	return (
		<div className="container-flex-big bg-black vh-100 ">
			<div className="container bg-light" >
				<div className="div">
					<p className="cardTitle text-center">Todos</p>	
				</div>
				<div className="container-flex border ">
					<div className="row noteBook bg-white">
						{ToDo()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
