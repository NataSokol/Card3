//import React from 'react'
import { Link } from 'react-router-dom'

function StartGameBtn() {
  return (
    <div className='welcomeBtn'>
        <Link to='/categories'>
        <button className='button'>Начать игру</button>
        </Link>
    </div>
  )
}

export default StartGameBtn