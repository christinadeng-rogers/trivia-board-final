// header component
import React from 'react';
import Countdown from './countdown';
import Reload from './reload';

function Header () {
  return (
    <div>
        <div className="countdown">
            <Countdown/>
        </div>
        <h1>Hello Trivia Game: Quiz Time!</h1>
        <h3>The Trivia Game contains 16 questions from 4 different categories, click any image to start the game.</h3>
        <Reload/>
    </div>
  )
}

export default Header;