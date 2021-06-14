// Qustions cards with category, trivia question, 3 multiple choice answers and a score 
const questions = [
    // 10 questions for Category 1: Sports
    {
        question: 'What’s the diameter of a basketball hoop in inches?',
        category: 'Sport',
        point: 25,
        options: [
            { answer: 'A. 14 inches', isCorrect: false },
            { answer: 'B. 16 inches', isCorrect: false },
            { answer: 'C. 18 inches', isCorrect: true },
        ],
    },
    {
        question: 'How big is an Olympic sized swimming pool in meters? ',
        category: 'Sport',
        point: 100,
        options: [
            { answer: 'A. 50m x 30m', isCorrect: false },
            { answer: 'B. 50m x 25m ', isCorrect: true },
            { answer: 'C. 60m x 30m', isCorrect: false },
        ],
    },
    {
        question: 'In professional basketball, how high is the basketball hoop from the ground? ',
        category: 'Sport',
        point: 50,
        options: [
            { answer: 'A. 10ft', isCorrect: true },
            { answer: 'B. 11ft', isCorrect: false },
            { answer: 'C. 12ft', isCorrect: false },
        ],
    },
    {
        question: 'The Summer Olympics are held every how many years?',
        category: 'Sport',
        point: 150,
        options: [
            { answer: 'A. 2 years', isCorrect: false },
            { answer: 'B.	4 years ', isCorrect: true },
            { answer: 'C.	6 years', isCorrect: false },
        ],
    },
    {
        question: 'What sport is dubbed the ‘king of sports’?',
        category: 'Sport',
        point: 75,
        options: [
            { answer: 'A. Hockey', isCorrect: false },
            { answer: 'B. Football', isCorrect: false },
            { answer: 'C. Soccer ', isCorrect: true },
        ],
    },
    {
        question: 'In American Football, a touchdown is worth how many points?',
        category: 'Sport',
        point: 200,
        options: [
            { answer: 'A. 3 points', isCorrect: false },
            { answer: 'B. 6 points', isCorrect: true },
            { answer: 'C. 9 points ', isCorrect: false },
        ],
    },
    {
        question: 'What is Canada’s national sport?',
        category: 'Sport',
        point: 150,
        options: [
            { answer: 'A. Hockey', isCorrect: false },
            { answer: 'B. Lacrosse', isCorrect: true },
            { answer: 'C. Cross country skiing', isCorrect: false },
        ],
    },
    {
        question: 'How many players are on a baseball team?',
        category: 'Sport',
        point: 100,
        options: [
            { answer: 'A. 9 players', isCorrect: true },
            { answer: 'B. 15 players', isCorrect: false },
            { answer: 'C. 20 players', isCorrect: false },
        ],
    },
    {
        question: 'What team gets the advantage of first bat in baseball',
        category: 'Sport',
        point: 25,
        options: [
            { answer: 'A. Home team', isCorrect: false },
            { answer: 'B. Visiting team', isCorrect: true },
        ],
    },
    {
        question: 'How many dimples does an average golf ball have?',
        category: 'Sport',
        point: 50,
        options: [
            { answer: 'A. 128', isCorrect: false },
            { answer: 'B. 260', isCorrect: false },
            { answer: 'C. 336', isCorrect: true },
        ],
    },
    // 10 questions for Category 2: Science
    {
        question: 'This essential gas is important so that we can breathe',
        category: 'Science',
        point: 50,
        options: [
            { answer: 'A. Oxygen', isCorrect: true },
            { answer: 'B. Nitrogenes', isCorrect: false },
            { answer: 'C. Helium', isCorrect: false },
        ],
    },
    {
        question: 'What is the nearest planet to the sun?',
        category: 'Science',
        point: 100,
        options: [
            { answer: 'A. Mars', isCorrect: false },
            { answer: 'B. Pluto', isCorrect: false },
            { answer: 'C. Mercury ', isCorrect: true },
        ],
    },
	{
		question: 'What is the largest planet in the solar system?',
        category: 'Science',
        point: 50,
        options: [
            { answer: 'A. Earth', isCorrect: false },
            { answer: 'B. Saturn', isCorrect: false },
            { answer: 'C. Jupiter ', isCorrect: true },
        ],
	},
	{
		question: 'What is the rarest blood type?',
        category: 'Science',
        point: 200,
        options: [
            { answer: 'A. O positive', isCorrect: false },
            { answer: 'B. AB negative ', isCorrect: true },
            { answer: 'C. B negative', isCorrect: false },
        ],
	},
	{
		question: 'On what part of your body would you find the pinna?',
        category: 'Science',
        point: 75,
        options: [
            { answer: 'A. Ear ', isCorrect: true },
            { answer: 'B. Eye', isCorrect: false },
            { answer: 'C. Nose ', isCorrect: false },
        ],
	},
	{
		question: 'What tissue connects muscles to bones?',
        category: 'Science',
        point: 125,
        options: [
            { answer: 'A. 3 points', isCorrect: false },
            { answer: 'B. 6 points', isCorrect: true },
            { answer: 'C. 9 points ', isCorrect: false },
        ],
	},
	{
		question: 'Sounds travels faster in air than in water',
        category: 'Science',
        point: 150,
        options: [
            { answer: 'A. True ', isCorrect: false },
            { answer: 'B. False', isCorrect: true },
        ],
	},
	{
		question: 'How long dos a human red blood cell survive?',
        category: 'Science',
        point: 175,
        options: [
            { answer: 'A. 10 days', isCorrect: false },
            { answer: 'B. 120 days', isCorrect: true },
            { answer: 'C. 2 years', isCorrect: false },
        ],
	},
	{
		question: 'Can you hear anything in outer space?',
        category: 'Science',
        point: 50,
        options: [
            { answer: 'A. Yes', isCorrect: false },
            { answer: 'B. No', isCorrect: true },
        ],
	},
	{
		question: 'An egg’s shell is what percentage of its total weight?',
        category: 'Science',
        point: 25,
        options: [
            { answer: 'A. 2%', isCorrect: false },
            { answer: 'B. 8%', isCorrect: false },
            { answer: 'C. 12%', isCorrect: true },
        ],
	},
    // 10 questions for Category 3: Music
    {
		question: 'Who was the very first American Idol winner?',
        category: 'Music',
        point: 50,
        options: [
            { answer: 'A. Kelly Clarkson ', isCorrect: true },
            { answer: 'B. Ryan Starr', isCorrect: false },
            { answer: 'C. Hilary Duff', isCorrect: false },
        ],
	},
    {
		question: 'Before Miley Cyrus recorded “Wrecking Ball,” it was offered to which singer?',
        category: 'Music',
        point: 100,
        options: [
            { answer: 'A. Alicia Keys', isCorrect: false },
            { answer: 'B. Beyoncé', isCorrect: true },
            { answer: 'C. Leona Lewis', isCorrect: false },
        ],
	},
    {
		question: 'What rock icon was the founder of The Society for the Prevention of Cruelty to Long-haired Men?',
        category: 'Music',
        point: 125,
        options: [
            { answer: 'A. David Bowie', isCorrect: true },
            { answer: 'B. Peter Frampton', isCorrect: false },
            { answer: 'C. Mick Jagger', isCorrect: false },
        ],
	},
    {
		question: 'Eminem‘s 8 Mile is named after a road in which city?',
        category: 'Music',
        point: 150,
        options: [
            { answer: 'A. Chicago', isCorrect: false },
            { answer: 'B. San Fran', isCorrect: false },
            { answer: 'C. Detroit', isCorrect: true },
        ],
	},
    {
		question: 'Who was the first woman ever inducted into the Rock and Roll Hall of Fame?',
        category: 'Music',
        point: 175,
        options: [
            { answer: 'A. Janice Joplin', isCorrect: false },
            { answer: 'B. Aretha Franklin ', isCorrect: true },
            { answer: 'C. Pat Benatar', isCorrect: false },
        ],
	},
    {
		question: 'Paul McCartney and John Lennon wrote which Rolling Stones song?',
        category: 'Music',
        point: 200,
        options: [
            { answer: 'A. I Wanna Be Your Man ', isCorrect: true },
            { answer: 'B. Let’s spend the night together', isCorrect: false },
            { answer: 'C. Ruby Tuesday', isCorrect: false },
        ],
	},
    {
		question: 'Which classical composer was deaf?',
        category: 'Music',
        point: 50,
        options: [
            { answer: 'A. Wolfgang Amadeux Mozart', isCorrect: false },
            { answer: 'B. Ludwig van Beethoven', isCorrect: true },
            { answer: 'C. Johann Sebastian Bach', isCorrect: false },
        ],
	},
    {
		question: 'Prince introduced his iconic symbol on the cover of which single?',
        category: 'Music',
        point: 25,
        options: [
            { answer: 'A. Purple Rain', isCorrect: false },
            { answer: 'B. Little red corvette', isCorrect: false },
            { answer: 'C. 1999 ', isCorrect: true },
        ],
	},
    {
		question: 'What does Lady Gaga affectionately call her fans?',
        category: 'Music',
        point: 150,
        options: [
            { answer: 'A. Superheroes', isCorrect: false },
            { answer: 'B. Little Monsters', isCorrect: true },
            { answer: 'C. Gaga fans', isCorrect: false },
        ],
	},
    {
		question: 'Who sang the Spongebob Squarepants theme song for the movie?',
        category: 'Music',
        point: 175,
        options: [
            { answer: 'A. Avril Lavigne', isCorrect: true },
            { answer: 'B. Hilary Duff', isCorrect: false },
            { answer: 'C. Miley Cyrus', isCorrect: false },
        ],
	},
    // 10 questions for Category 4: Nature
    {
		question: 'What part of the plant conducts photosynthesis?',
        category: 'Nature',
        point: 200,
        options: [
            { answer: 'A. Stem', isCorrect: false },
            { answer: 'B. Flower', isCorrect: false },
            { answer: 'C. Leaf', isCorrect: true },
        ],
	},
    {
		question: 'What is the largest known land animal?',
        category: 'Nature',
        point: 50,
        options: [
            { answer: 'A. Hippopotamus', isCorrect: false },
            { answer: 'B. Elephant ', isCorrect: true },
            { answer: 'C. Giraffe', isCorrect: false },
        ],
	},
    {
		question: 'How many bones to sharks have in total?',
        category: 'Nature',
        point: 25,
        options: [
            { answer: 'A. 0 bones', isCorrect: true },
            { answer: 'B. 3 bones', isCorrect: false },
            { answer: 'C. 12 bones', isCorrect: false },
        ],
	},
    {
		question: 'Dolly was the first ever living creature to be cloned. What type of animal was she?',
        category: 'Nature',
        point: 75,
        options: [
            { answer: 'A. Sheep ', isCorrect: true },
            { answer: 'B. Mouse', isCorrect: false },
            { answer: 'C. Worm', isCorrect: false },
        ],
	},
    {
		question: 'What is the tallest type of grass?',
        category: 'Nature',
        point: 50,
        options: [
            { answer: 'A. Northwind switch grass ', isCorrect: false },
            { answer: 'B. Pampas grass', isCorrect: false },
            { answer: 'C. Bamboo ', isCorrect: true },
        ],
	},
    {
		question: 'What type of tree do acorns come from?',
        category: 'Nature',
        point: 100,
        options: [
            { answer: 'A. Oak  ', isCorrect: true },
            { answer: 'B. Red maple', isCorrect: false },
            { answer: 'C. Sugar maple', isCorrect: false },
        ],
	},
    {
		question: 'What the hardest known material in nature?',
        category: 'Nature',
        point: 125,
        options: [
            { answer: 'A. Topaz ', isCorrect: false },
            { answer: 'B. Corundum', isCorrect: false },
            { answer: 'C. Diamonds', isCorrect: true },
        ],
	},
    {
		question: 'How old, is the oldest living tree?',
        category: 'Nature',
        point: 50,
        options: [
            { answer: 'A. 4800 years ', isCorrect: true },
            { answer: 'B. 8100 years', isCorrect: false },
            { answer: 'C. 1300 years', isCorrect: false },
        ],
	},
    {
		question: 'Where is the oldest living tree located?',
        category: 'Nature',
        point: 150,
        options: [
            { answer: 'A. California, USA ', isCorrect: true },
            { answer: 'B. British Columbia, CA', isCorrect: false },
            { answer: 'C. Canterbury, NZ', isCorrect: false },
        ],
	},
    {
		question: 'How many hearts does an octopus have?',
        category: 'Nature',
        point: 200,
        options: [
            { answer: 'A. 1 ', isCorrect: false },
            { answer: 'B. 2', isCorrect: false },
            { answer: 'C. 3', isCorrect: true },
        ],
	},
  ];
  
  export default questions;