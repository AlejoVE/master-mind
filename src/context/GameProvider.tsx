import { FC, useState } from 'react';
import { Colors } from '../types/types';
import { GameContext } from './gameContext';
import { generateRandomCode } from '../helpers/helpers';

interface Props {
	children: JSX.Element;
}

const colors = Object.values(Colors);
const currentCode = generateRandomCode(colors);

const GameProvider: FC<Props> = ({ children }: Props) => {
	const [currentColor, setCurrentColor] = useState<string>('');
	const [gameOver, setGameOver] = useState<boolean>(false);
	const [startTimer, setStartTimer] = useState<boolean>(false);
	const [availableRows, setAvailableRows] = useState<number>(0);
	return (
		<GameContext.Provider
			value={{
				currentColor,
				setCurrentColor,
				currentCode,
				gameOver,
				setGameOver,
				availableRows,
				setAvailableRows,
				gameRows: 6,
				startTimer,
				setStartTimer,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default GameProvider;
