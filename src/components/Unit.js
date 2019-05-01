import React from 'react';

const Unit = () => {
	// let cost = 175.5;
	return (
		<div style={{width: "160px", background: "#1DC090"}} className="tc pa3 sans-serif">
			<div className='black f4 asfs'>
				{'COST PER UNIT'}
			</div>
			<div className='pt4 jcb white f2 asfe'>
				{'$' + 175.5}
			</div>
		</div>
	);
}

export default Unit;