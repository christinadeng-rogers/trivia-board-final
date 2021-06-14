// actual quiz
import React, {useState} from 'react';
import questions from '../components/questions';
import getImageByKey from '../components/categories';
import Header from '../components/header';
import Reload from '../components/reload';

function Quiz() {
    // shuffle questions and select 16 questions from the question bank
    var shuffle = require('shuffle-array');
    const randomQuestions = shuffle.pick(questions, {'picks': 16});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [showResult, setShowResult] = useState(false);
  

    // if right answer is clicked, add points, else deduct points
	const handleClick = (isCorrect, point) => {
		if (isCorrect) {
			setScore(score + point);
            alert("This is correct!");
		} else {
            setScore(score - point);
            setCount(count + 1);
            alert("Sorry, this is incorrect.");
        }

        // navigate to next question, if answer all the questions, show result
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < randomQuestions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
	};
    return (
        <div className='quiz'>
			{showResult ? ( count === 0 ? 
                <div className='result'>
                    You score is {score}. Congradulation you won! 
                    <Reload/>
                </div>
                 :
				<div className='result'>
                    You score is {score}. You can do better next time.
                    <Reload/>
				</div>
			) : (
				<>
					<div className='question'>
                        <Header/>
                        <span className="questionCount">Question {currentQuestion + 1}/{randomQuestions.length}</span>
                        <span className='score' style={{color: score >= 0 ? "green" : "red"}}>
                            You scored is {score}
                        </span>
                        <div className="card">
                            <img src={getImageByKey(randomQuestions[currentQuestion].category)}/>
						    <h1 className='question-text'>{randomQuestions[currentQuestion].question}</h1>
                            <h3>{randomQuestions[currentQuestion].category}</h3>
                            <h1 class='point'>{randomQuestions[currentQuestion].point} Points</h1>
                            <div className="answer">
                            {randomQuestions[currentQuestion].options.map((option => (
                                <button className="btn" onClick={() => 
                                    handleClick(option.isCorrect, randomQuestions[currentQuestion].point)}>{option.answer}
                                </button>
                            )))}
                            </div>
                        </div>
					</div>
				</>
			)}
		</div>
    )
}

export default Quiz; 