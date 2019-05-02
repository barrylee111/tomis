import React from 'react';
import IncrementButton from './IncrementButton.png';
import DecrementButton from './DecrementButton.png';

let image="IncrementButton.png";

const Input = ({onInputChange, onIncrement, onDecrement, number}) =>{
	
	let unit = number;

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
					{/*<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit }>
						Detect</button>*/}
				</div>
			</div>
		</div>
	);
}	

export default Input;