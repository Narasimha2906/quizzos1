const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {

  currentQuestionIndex++

  setNextQuestion()

})

function startGame() {

  startButton.classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - .5)

  currentQuestionIndex = 0

  questionContainerElement.classList.remove('hide')

  setNextQuestion()

}

function setNextQuestion() {

  resetState()

  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

  questionElement.innerText = question.question

  question.answers.forEach(answer => {

    const button = document.createElement('button')

    button.innerText = answer.text

    button.classList.add('btn')

    if (answer.correct) {

      button.dataset.correct = answer.correct

    }

    button.addEventListener('click', selectAnswer)

    answerButtonsElement.appendChild(button)

  })

}

function resetState() {

  clearStatusClass(document.body)

  nextButton.classList.add('hide')

  while (answerButtonsElement.firstChild) {

    answerButtonsElement.removeChild(answerButtonsElement.firstChild)

  }

}

function selectAnswer(e) {

  const selectedButton = e.target

  const correct = selectedButton.dataset.correct

  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {

    setStatusClass(button, button.dataset.correct)

  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {

    nextButton.classList.remove('hide')

  } else {

    startButton.innerText = 'Restart'

    startButton.classList.remove('hide')

  }

}

function setStatusClass(element, correct) {

  clearStatusClass(element)

  if (correct) {

    element.classList.add('correct')

  } else {

    element.classList.add('wrong')

  }

}

function clearStatusClass(element) {

  element.classList.remove('correct')

  element.classList.remove('wrong')

}

const questions = [

  {

    question: 'Garampani sanctuary is located at',

    answers : [

      { text: 'Junagarh, Gujarat', correct: false },

      { text: 'Diphu, Assam', correct: true },

      { text: 'Kohima, Nagaland', correct: false },

      {text: 'Gangtok, Sikkim', correct: false}

    ]

  },

  {

    question: 'Grand Central Terminal, Park Avenue, New York is the worlds',

    answers: [

      { text: 'largest railway station', correct: true },

      { text: 'highest railway station', correct: false },

      { text: 'longest railway station', correct: false },

      { text: 'None of the above', correct: false }

    ]

  },

  {

    question: 'Entomology is the science that studies',

    answers: [

      { text: 'Behavior of human beings', correct: false },

      { text: 'Insects', correct: true },

      { text: 'The origin and history of technical and scientific terms', correct: false },

      { text: 'The formation of rocks', correct: false }

    ]

  },

  {

    question: 'First China War was fought between',

    answers : [

      { text: 'China and Britain', correct: true },

      { text: 'China and France', correct: false },

      { text: 'China and Egypt', correct: false },

      {text: 'China and Greek', correct: false}

    ]

  },

  {

    question: '	Fire temple is the place of worship of which of the following religion?',

    answers : [

      { text: 'Taoism', correct: false },

      { text: 'Judaism', correct: false },

      { text: 'Zoroastrianism (Parsi Religion)', correct: true },

      {text: 'Shintoism', correct: false}

    ]

  },

  {

    question: 'For which of the following disciplines is Nobel Prize awarded?',

    answers: [

      { text: 'Physics and Chemistry', correct: false },

      { text: 'Physiology or Medicine', correct: false },

      { text: 'Literature, Peace and Economics', correct: false },

      { text: 'All of the above', correct: true }

    ]

  },

  {

    question: '	Hitler party which came into power in 1933 is known as',

    answers: [

      { text: 'Labour Party', correct: false },

      { text: 'Nazi Party', correct: true },

      { text: 'Ku-Klux-Klan', correct: false },

      { text: 'Democratic Party', correct: false }

    ]

  },

  {

    question: 'Galileo was an Italian astronomer who',

    answers: [

      { text: 'developed the telescope', correct: false },

      { text: 'discovered four satellites of Jupiter', correct: false },

      { text: 'discovered that the movement of pendulum produces a regular time measurement', correct: false },

      { text: 'All of the above', correct: true }

    ]

  },

  {

    question: 'Gulf cooperation council was originally formed by',

    answers: [

      { text: 'Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and United Arab Emirates', correct: true },

      { text: 'Second World Nations', correct: false },

      { text: 'Third World Nations', correct: false },

      { text: 'Fourth World Nations', correct: false }

    ]

  },

  {

    question: 'Golf player Vijay Singh belongs to which country?',

    answers: [

      { text: 'USA', correct: false },

      { text: 'Fiji', correct: true },

      { text: 'India', correct: false },

      { text: 'UK', correct: false }

    ]

  }

]