import { createContext } from 'react';

interface GameContextType {
    currentColor: string,
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>
    currentCode: string[]
}


export const GameContext = createContext<GameContextType>({} as GameContextType)