import { createContext } from 'react';

interface GameContextType {
	currentColor: string;
	setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
	currentCode: string[];
	gameOver: boolean;
	setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
	availableRows: number;
	setAvailableRows: React.Dispatch<React.SetStateAction<number>>;
	gameRows: number;
	startTimer: boolean;
	setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GameContext = createContext<GameContextType>(
	{} as GameContextType
);
