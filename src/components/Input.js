import React from 'react';
import IncrementButton from './IncrementButton.png';
import DecrementButton from './DecrementButton.png';

const Input = ({onInputChange, onIncrement, onDecrement, number}) =>{

	return (
		<div>
			<div className='center'>
				<div className='center form asc sans-serif'>
					<p 
						className='f1 tc light-gray'># OF UNITS
					</p>
					<div 
						style={{width: '250px'}}
						className='flex jcc'

					>
						<img 
							alt='Increment Button' 
							src={DecrementButton}
							onClick={ onDecrement }
						>
						</img>
						<input 
							style={{width: '100px'}}
							className='b tc f2 pa2 flex center' 
							type='text' 
							onChange={ onInputChange }
							value={number}

						/>
						<img 
							alt='Increment Button' 
							src={IncrementButton}
							onClick={ onIncrement }
						>
						</img>
					</div>
				</div>
			</div>
		</div>
	);
}	

export default Input;