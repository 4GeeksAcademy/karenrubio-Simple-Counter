import React from "react";
import Secondscounter from "./secondscounter";
//include images into your bundle




//create your first component

	
	const Home = (props) => {
		return (
		  <>
			<Secondscounter />
			<Secondscounter seconds={seconds} />
			<Secondscounter seconds={seconds}/>
			<Secondscounter seconds={seconds} />
			<Secondscounter seconds={seconds}/>
		  </>
		);
	  };
export default Home
