import React from "react";
import Oven from './Oven';
import Sink from './Sink';

const Kitchen = () => {
  return (
		<React.Fragment>
	<div id="kitchen"> 
		<span>Kitchen</span>
		<Oven/>
		<Sink/>
	</div>
		</React.Fragment>
	);
};

export default Kitchen;
