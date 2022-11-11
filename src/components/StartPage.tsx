import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
	return (
		<div className='page-content'>
			<div>
				<h1 className='start-header'>MASTERMIND</h1>
			</div>
			{/* <div className='question'>
				<h2>How many colors would you like to use?</h2>
				<div className='options'>
					<label>
						<input type='radio' value='4' name='color' />4
					</label>
					<label>
						<input type='radio' value='6' name='color' />6
					</label>
				</div>
			</div> */}
			{/* <div className='question'>
				<h2>How long will the sequence be?</h2>
				<div className='options'>
					<label>
						<input type='radio' value='4' name='length' />4
					</label>
					<label>
						<input type='radio' value='6' name='length' />6
					</label>
				</div>
			</div> */}
			<div className='instructions-grid'>
				<div>
					<h2>Rules of the game</h2>
					<ul>
						<li>
							The computer picks a sequence of colors. The number of
							colors is the code length. The default code length is 4.
						</li>
						<li>
							The objective of the game is to guess the exact positions
							of the colors in the computer's sequence.
						</li>
						<li>
							By default, a color can be used only once in a code
							sequence.
						</li>
						<li>
							After filling a line with your guesses and clicking on the
							'Check' button, the computer responses with the result of
							your guess.
						</li>
						<li>
							For each color in your guess that is in the correct color
							and correct position in the code sequence, the computer
							display a small red color on the right side of the current
							guess.
						</li>
						<li>
							For each color in your guess that is in the correct color
							but is NOT in the correct position in the code sequence,
							the computer display a small white color on the right side
							of the current guess.
						</li>
						<li>
							You win the game when you manage to guess all the colors in
							the code sequence and when they all in the right position.
						</li>
						<li>
							You lose the game if you use all attempts without guessing
							the computer code sequence or if you run out of time.
						</li>
					</ul>
				</div>
				<div>
					<h2>How to play</h2>
					<ul>
						<li>
							{' '}
							Start a new game by clicking on the 'Start New Game'
							button.
						</li>
						<li>
							To start filling a line, you must first select a color at
							the bottom of the table by clicking on it. After selecting
							a color you can just put it in the current guess line above
							by clicking on the desired position.
						</li>
						<li>When you select a color, the time will start running.</li>
						<li>
							To change the color selection, just click on a new color on
							one of the colors at the bottom{' '}
						</li>
						<li>
							After filling a whole line, you can still change your
							selection before asking the computer to respond to your
							guess. When you're satisfied with your guess, just click on
							the 'Check' button and get the computer response.
						</li>
					</ul>
				</div>
			</div>
			<Link to={'/game'} id='start-game'>
				Start
			</Link>
		</div>
	);
}

export default StartPage;
