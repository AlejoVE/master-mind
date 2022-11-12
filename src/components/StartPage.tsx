import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
	return (
		<div className='page-content'>
			<div>
				<h1 className='start-header'>MASTERMIND</h1>
			</div>
			<div className='instructions-grid'>
				<div>
					<h2>Rules</h2>
					<p>
						The computer picks a sequence of 4 colors.You need to guess
						the sequence: the colors and the order.
						<br></br> Colors don't repeat. You will have 5 minutes to
						guess the sequence.
					</p>
				</div>
				<div>
					<h2>How to play</h2>
					<ul>
						<li>
							{' '}
							Press <span className='mention-start'>Start</span> button
							to start the game.
						</li>
						<li>Click to choose color at the bottom of the page.</li>
						<li>
							{' '}
							Click on the empty slot in the first empty row to place
							your color.
						</li>
						<li>The timer starts when you have selected you color.</li>
						<li>
							You can change colors you have placed in a row: select
							color at the bottom anc click on teh color you want to
							replace.
						</li>
						<li>
							After you filled the line, click the{' '}
							<span className='mention-check'>Check</span> button. At the
							end of each row you will see 4 small slots - you will get
							the computers response there. If you guessed the color
							right - you will see white circle, if you guessed the color
							and the position right - you will see red circle.
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
