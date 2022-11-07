import React, { useContext, useRef } from 'react'
import Circle from './Circle'
import { GameContext } from '../context/gameContext';
import { Colors } from '../types/types';
import swal from 'sweetalert';
import { checkAnswers } from '../helpers/helpers';


type RowProps = {
    circle?: number,
    id: string
}

function Row(props: RowProps) {
    const {currentColor, currentCode} = useContext(GameContext)
    const rowEl = useRef<HTMLDivElement>(null)
    const gridEl =  useRef<HTMLDivElement>(null)

    // Change  button color
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
     if(currentColor) {
         (e.target as HTMLButtonElement).style.backgroundColor = currentColor;
         (e.target as HTMLButtonElement).setAttribute('data-color', currentColor)
        }
    }

    const checkUserAnswers = ()=>{
        checkAnswers(rowEl, gridEl, currentCode)
    }

  return (
    <div className='row-main'>
        <div className='row-main-container'>
            <div className='row-circles-container' >
                <div ref={rowEl}>
                <Circle onClick={handleClick}  size='3' />
                <Circle onClick={handleClick}  size='3' />
                <Circle onClick={handleClick}  size='3' />
                <Circle onClick={handleClick}  size='3' />
                </div>
                <button onClick={checkUserAnswers}>CHECK button</button>
            </div>
            <div ref={gridEl} className='row-grid'>
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