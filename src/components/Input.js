import React from 'react';
import IncrementButton from './IncrementButton.png';
import DecrementButton from './DecrementButton.png';

const Input = ({onInputChange, onIncrement, onDecrement, number}) =>{

	return (
		<div>
			<div className='center'>
				<div className='center form asc'>
					<p 
						style={{fontSize: '14px'}}
						className='tc gray'># OF UNITS
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
							className='f4 tc pa2 flex center' 
							type='text' 
							onChange={ onInputChange }
							value={number}

						/>
						<img 
							// style={{width: 'height'}}
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