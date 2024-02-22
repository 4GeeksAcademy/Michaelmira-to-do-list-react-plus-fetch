// home.jsx

import React from "react";

import ToDoPlusCancel from "./ToDo";
import CleanAll from "./CleanAll";

//create your first component
const Home = () => {
	return (
		<div className="container-flex-big bg-black vh-100 ">
			<div className="container" >
				<div className="div">
					<p className="cardTitle text-center">Todos</p>	
				</div>
				<div className="container-flex mx-auto ">
					<div className="container-flex mx-auto noteBook bg-white flex-column">
						<div className="container-flex mx-auto border d-felx flex-column">
							<ToDoPlusCancel />
						</div>
						{/* <div className="col-12 footerStyle bg-white border d-flex align-items-center">
							<Footer />
						</div> */}
					</div>
				</div>
			</div>
			<div>
				{/* <CleanAll /> */}
			</div>
		</div>
	);
};

export default Home;
