// home page with trivia board
import React from 'react';
import questions from '../components/questions';
import getImageByKey from '../components/categories';
import Reload from '../components/reload';

function Home(){
    // shuffle questions and select 16 questions from the question bank
    var shuffle = require('shuffle-array');
    const randomQuestions = shuffle.pick(questions, {'picks': 16});

    return (
        <div>
            <h1>Hello Trivia Game: Quiz Time!</h1>
            <h3>The Trivia Game contains 16 questions from 4 different categories, click any image to start the game.</h3>
            <Reload/>
            <ul className="cards">
                {randomQuestions.map(randomQuestion => (
                <div className="card">
                    <a href="/quiz" class='container'>
                        <img src={getImageByKey(randomQuestion.category)}></img>
                        <div class="overlay">
                            <div class="text">Start Game </div>
                        </div>
                    </a>
                    <h2>{randomQuestion.question}</h2>
                    <h4>{randomQuestion.category}</h4>
                    <h2 class='point'>{randomQuestion.point} Points</h2>
                </div>
                ))}
            </ul>
        </div>
    );
}

export default Home; 