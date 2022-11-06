import { createContext } from "react";

interface GameContextType {
    currentColor: string,
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>
}

export const GameContext = createContext<GameContextType | null>(null)