import React from 'react'
import Circle from './Circle';

function AvailableColors() {
  return (
    <div className='available-colors-container'>
        <div className='square'>
            <Circle color='red' size='4' />
        </div>
        <div className='square'>
            <Circle color='yellow' size='4' />
        </div>
        <div className='square'>
            <Circle color='blue' size='4' />
        </div>
        <div className='square'>
            <Circle color='black' size='4' />
        </div>
        <div className='square'>
            <Circle color='cyan' size='4' />
        </div>
        <div className='square'>
            <Circle color='green' size='4' />
        </div>
    </div>
  )
}

export default AvailableColors
