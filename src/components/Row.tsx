import React, { useContext, useRef } from 'react';
import Circle from './Circle';
import { GameContext } from '../context/gameContext';
import {
	changeButtonColor,
	checkAnswers,
	getRowColors,
} from '../helpers/helpers';
import { useState } from 'react';
import Swal from 'sweetalert';
import { useReset } from '../hooks/useReset';

type RowProps = {
	circle?: number;
};

function Row(props: RowProps) {
	const {
		currentColor,
		currentCode,
		setGameOver,
		setAvailableRows,
		availableRows,
		score,
		setScore,
		gameOver,
	} = useContext(GameContext);
	const rowEl = useRef<HTMLDivElement>(null);
	const gridEl = useRef<HTMLDivElement>(null);
	const [displayCheckButton, setDisplayCheckButton] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);
	const reset = useReset();
	const slots = Array.from(Array(4).keys());

	// Change  button color
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (currentColor) {
			changeButtonColor(e, currentColor);
		}
		const userAnswers = getRowColors(rowEl);
		if (userAnswers.length === currentCode.length) {
			setDisplayCheckButton(true);
		}
	};

	const checkUserAnswers = () => {
		const rowsLeft = availableRows - 1;
		setAvailableRows(rowsLeft);
		setDisplayCheckButton(false);
		setDisabled(true);
		const gameOver = checkAnswers(rowEl, gridEl, currentCode);

		if (gameOver) {
			setGameOver(true);
			setScore(score + 1);
			setTimeout(() => {
				reset();
			}, 2000);
		}

		if (!gameOver && rowsLeft <= 0) {
			Swal('Game over', '', 'error');
			setGameOver(true);
			setTimeout(() => {
				reset();
			}, 2000);
			if (score > 0) {
				setScore(score - 1);
			}
		}
	};

	return (
		<div className='row-main'>
			<div className='row-main-container'>
				<div className='row-circles-container'>
					<div ref={rowEl}>
						{slots.map((row, i) => {
							return (
								<Circle
									key={i}
									gameOver={gameOver}
									disabled={disabled}
									onClick={handleClick}
									size='3'
								/>
							);
						})}
					</div>
					{displayCheckButton && (
						<button onClick={checkUserAnswers}>CHECK button</button>
					)}
				</div>
				<div ref={gridEl} className='row-grid'>
					{slots.map((row, i) => {
						return (
							<Circle
								key={i}
								gameOver={gameOver}
								disabled={true}
								size='1.2'
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Row;
