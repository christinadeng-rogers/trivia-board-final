# Trivia Board 
Trivia Board is a two-page React.js application where the user can test their knowledge in 4 different categories. The board have 16 question cards and user can click on any question card to start the actual quiz. At the end of the game, the user will get an overall trivia score. 

# Installation
```bash
git clone https://github.com/christinadeng-rogers/trivia-board-final.git
cd trivia-board-final
npm install
npm start
```

# Features
- [trivia-board] - Trivia board to show all 16 trivia question cards for a round
- [trivia-card] - Each trivia card has a image, question, score, category and list of options
- [restart] - Restart button to restart the game with different combination of trivia questions
- [start-game] The user can click on any image in home page to start the game
- [finish-status] - Show message after all quiz questions have been completed 
- [inform-answer] - Inform if the answer is right or wrong
- [category] - Each trivia question card has its category and display image based on its category
- [timer] - The header contains a one minute time  
- [total-score] - Add score if the user choose the right answer, and otherwise, deduct the score 
- [score-color] - Set score to green color if it is positive, otherwise negative 

# Todo
- [timer] - Add click event to timer so it will reset after user finish a question. Adjust score if user does not choose anwer within the timeframe.
- [pass] - Add pass functionality to allow user to pass a question for one time to avoid lose points
- [ux/ui] - Improve ux and ui for better user experience
- [alert] - Change popover alert so that the user don't need to click extra button to navigate to next question 

## License
[MIT](https://choosealicense.com/licenses/mit/)