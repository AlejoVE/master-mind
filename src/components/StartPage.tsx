import React, { useContext } from 'react';
import { GameContext } from '../context/gameContext';
import { Link } from 'react-router-dom';

function StartPage() {
	return (
		<div className='page-content'>
			<div>
				<h1 className='start-header'>MASTERMIND</h1>
			</div>
			<div className='question'>
				<h2>How many colors would you like to use?</h2>
				<div className='options'>
					<label>
						<input type='radio' value='4' name='color' />4
					</label>
					<label>
						<input type='radio' value='6' name='color' />6
					</label>
				</div>
			</div>
			<div className='question'>
				<h2>How long will the sequence be?</h2>
				<div className='options'>
					<label>
						<input type='radio' value='4' name='length' />4
					</label>
					<label>
						<input type='radio' value='6' name='length' />6
					</label>
				</div>
			</div>
			<Link to={'/game'} id='start-game'>
				Start
			</Link>
		</div>
	);
}

export default StartPage;
