import React from "react";

import ToDo from "./ToDo";

import CancellButton from "./CancellButton";

import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container-flex-big bg-black vh-100 ">
			<div className="container" >
				<div className="div">
					<p className="cardTitle text-center">Todos</p>	
				</div>
				<div className="container-flex ">
					<div className="row noteBook bg-white flex-column">
						<div className="col-12 border d-felx flex-column inputStyle">
							<div className="div row align-items-center fs-4 ">
								<div className="col-10">
									{ToDo()}
								</div>
								<div className="col-2 text-right">
								<div style={{ textAlign: 'right' }}>
										{CancellButton()}
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 border d-felx flex-column inputStyle">
							<div className="div row align-items-center fs-4 ">
								<div className="col-10">
									{ToDo()}
								</div>
								<div className="col-2 text-right">
								<div style={{ textAlign: 'right' }}>
										{CancellButton()}
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 footerStyle bg-white border d-flex align-items-center">
						{Footer()}
						</div>
	


						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
