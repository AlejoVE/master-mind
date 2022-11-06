import React, { useContext } from 'react'
import Circle from './Circle'
import { GameContext } from '../context/gameContext';

type RowProps = {
    circle?: number
}

function Row(props: RowProps) {

    const context = useContext(GameContext)
    const currentColor = context?.currentColor
    const style = {
     backgroundColor: `${currentColor ? currentColor : '#53483F'}`
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
     const color: string = (e.target as HTMLButtonElement).getAttribute('data-color') as string;
 
     if(context?.currentColor === '') {
 
     }
    }
  return (
    <div className='row-main'>
        <div className='row-main-container'>
            <div className='row-circles-container' >
                <Circle size='3' />
                <Circle size='3' />
                <Circle size='3' />
                <Circle size='3' />
            </div>
            <div className='row-grid'>
                <Circle size='1.2' />
                <Circle size='1.2' />
                <Circle size='1.2' />
                <Circle size='1.2' />
            </div>
        </div>
    </div>
  )
}

export default Row