import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./counter";

//create your first component
const Home = () => {
	return (
		<>
		  <Counter />
		  <Counter digitFour={four} />
		  <Counter digitThree={three}/>
		  <Counter digitTwo={two}/>
		  <Counter digitOne={one} />
		</>
	);
};

export default Home;
