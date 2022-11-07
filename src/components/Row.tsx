import React, { useContext, useRef } from 'react';
import Circle from './Circle';
import { GameContext } from '../context/gameContext';
import { checkAnswers } from '../helpers/helpers';
import { useState } from 'react';

type RowProps = {
	circle?: number;
	id: string;
};

function Row(props: RowProps) {
	const { currentColor, currentCode } = useContext(GameContext);
	const rowEl = useRef<HTMLDivElement>(null);
	const gridEl = useRef<HTMLDivElement>(null);
	const [displayCheckButton, setDisplayCheckButton] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

	// Change  button color
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const rowChildren = rowEl.current?.childNodes;
		if (currentColor) {
			(e.target as HTMLButtonElement).style.backgroundColor = currentColor;
			(e.target as HTMLButtonElement).setAttribute(
				'data-color',
				currentColor
			);
		}

		const rowColors: (string | null)[] = [];

		if (rowChildren) {
			// The current colors in the row (default and user colors), if user did not put a color, the data-color attribute will be null
			rowChildren.forEach((button) => {
				const color = (button as HTMLButtonElement).getAttribute(
					'data-color'
				);
				rowColors.push(color);
			});
		}

		//  To check if user has put 4 colors in the row
		const userAnswers = rowColors.filter((color) => color !== null);

		if (userAnswers.length === currentCode.length) {
			setDisplayCheckButton(true);
		}
	};

	const checkUserAnswers = () => {
		setDisplayCheckButton(false);
		setDisabled(true);
		checkAnswers(rowEl, gridEl, currentCode);
	};

	return (
		<div className='row-main'>
			<div className='row-main-container'>
				<div className='row-circles-container'>
					<div ref={rowEl}>
						<Circle disabled={disabled} onClick={handleClick} size='3' />
						<Circle disabled={disabled} onClick={handleClick} size='3' />
						<Circle disabled={disabled} onClick={handleClick} size='3' />
						<Circle disabled={disabled} onClick={handleClick} size='3' />
					</div>
					{displayCheckButton && (
						<button onClick={checkUserAnswers}>CHECK button</button>
					)}
				</div>
				<div ref={gridEl} className='row-grid'>
					<Circle disabled={true} size='1.2' />
					<Circle disabled={true} size='1.2' />
					<Circle disabled={true} size='1.2' />
					<Circle disabled={true} size='1.2' />
				</div>
			</div>
		</div>
	);
}

export default Row;
