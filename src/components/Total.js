import React from 'react';
import './Unit';

const Total = ({number}) => {
	let cost =number*175.50;

	if(cost < 0){
		return(
		<div style={{width: "160px"}} className='bg-purple tc pa3 sans-serif'>

			<div className='black f4'>
				{'TOTAL COST'}
			</div>
			<div className='white f2'>
				{'$0'}
			</div>

			{alert('Please enter a unit value from 0 to infinity...no negative numbers...')}

		</div>

	);
	}

	else{
		let value = '';
		if(!Number.isInteger(cost)){ value =  '$' + parseFloat(Math.round(cost* 100) / 100).toFixed(2)}
		else{value = value =  '$' + parseFloat(Math.round(cost* 100) / 100).toFixed(0)}

		return(
		<div style={{width: "160px"}} className='bg-purple tc pa3 sans-serif'>

			<div className='black f4'>
				{'TOTAL COST'}
			</div>
			<div className='white f2'>
				
				{value}
				
			</div>
		</div>

	);
	}
}

export default Total;