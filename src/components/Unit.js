import React from 'react';

const Unit = () => {
	// let cost = 175.5;
	return (
		<div style={{width: "160px", background: "#1DC090"}} className="tc pa3 sans-serif pb0">
			<div style={{fontSize: '14px'}} className='black asfs'>
				{'COST PER UNIT'}
			</div>
			<div style={{fontSize: '30px'}} className='jcb white asfe'>

				<p className='bottom'>{'$175.50'}</p>
			</div>
		</div>
	);
}

export default Unit;