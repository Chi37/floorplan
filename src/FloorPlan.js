import React from 'react';
import Kitchen from './Kitchen'
import BedRoom from './BedRoom'
import Bath from './Bath'
import LivingRoom from './LivingRoom'



const FloorPlan  = (props) => {

	return (
		<div id='floor-plan'>
			<div id='top'>
				<div id='b1-fb'>
					<BedRoom bedNum='1'/>
					<Bath size='full'/>
				</div>
			<LivingRoom/>
			<Kitchen/>
			</div>
			<div id='btm'>
			<BedRoom bedNum='2'/>
			<Bath size='half'/>
			<BedRoom bedNum='3'/>
			</div>
		</div>
	  );
}
 
export default FloorPlan;


