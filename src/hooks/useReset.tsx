import { useContext } from 'react';
import { GameContext } from '../context/gameContext';

export const useReset = () => {
	const { setAvailableRows, setGameOver, gameRows } = useContext(GameContext);

	return () => {
		setAvailableRows(gameRows);
		setGameOver(false);
	};
};
