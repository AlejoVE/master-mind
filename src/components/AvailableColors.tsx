import React, { useContext } from 'react';
import Circle from './Circle';
import { GameContext } from '../context/gameContext';
import { Colors } from '../types/types';

function AvailableColors() {
	const { setCurrentColor, currentColor } = useContext(GameContext);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const color: string = (e.target as HTMLButtonElement).getAttribute(
			'data-color'
		) as string;
		setCurrentColor(color);
	};

	return (
		<>
			<div className='available-colors-container'>
				<div className='square'>
					<Circle onClick={handleClick} color={Colors.RED} size='4' />
				</div>
				<div className='square'>
					<Circle onClick={handleClick} color={Colors.YELLOW} size='4' />
				</div>
				<div className='square'>
					<Circle onClick={handleClick} color={Colors.BLUE} size='4' />
				</div>
				<div className='square'>
					<Circle onClick={handleClick} color={Colors.BLACK} size='4' />
				</div>
				<div className='square'>
					<Circle onClick={handleClick} color={Colors.PURPLE} size='4' />
				</div>
				<div className='square'>
					<Circle onClick={handleClick} color={Colors.GREEN} size='4' />
				</div>
			</div>
			<Circle
				disabled={true}
				onClick={handleClick}
				color={currentColor}
				size='4'
			/>
		</>
	);
}

export default AvailableColors;
