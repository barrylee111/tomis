import React from 'react';

const Input = ({onInputChange}) =>{
	return (
		<div>
			<div className='center'>
				<div className='center form asc'>
					<p 
						style={{fontSize: '14px'}}
						className='tc gray'># OF UNITS
					</p>
					<input 
						className='f4 tc pa2 w-25 flex center' 
						type='text' 
						onChange={ onInputChange }

					/>
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