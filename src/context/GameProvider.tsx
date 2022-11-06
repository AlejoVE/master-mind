import {FC, useState} from 'react'
import { GameContext } from './gameContext'

interface Props {
    children: JSX.Element
}



 const  GameProvider: FC<Props> = ({children}: Props) => {
    const [currentColor, setCurrentColor] = useState<string>('')
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=> {
        const color: string = (e.target as HTMLButtonElement).getAttribute('data-color') as string
        setCurrentColor(color)
        console.log({currentColor})
    }
  return (
    <GameContext.Provider value={{currentColor, setCurrentColor}}>
        {children}
    </GameContext.Provider>
  )
}

export default GameProvider
