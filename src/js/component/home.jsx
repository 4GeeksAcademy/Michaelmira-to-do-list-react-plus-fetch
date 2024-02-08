import React from "react";

import ToDo from "./ToDo";

import CancellButton from "./CancellButton";

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
						<div className="col-12 d-felx flex-column inputStyle">
							<div className="div border col-12 ">
								{ToDo()}
								{CancellButton()}
							</div>
							<div className="div border w-100 ">
								{ToDo()}
								{CancellButton()}
							</div>
							<div className="div border w-100 ">
								{ToDo()}
								{CancellButton()}
							</div>
							<div className="div">
								{ToDo()}
								{CancellButton()}
							</div>
							<div className="div">
								{ToDo()}
								{CancellButton()}
							</div>
							<div className="div">
								{ToDo()}
							</div>
							<div className="div">
								{ToDo()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
