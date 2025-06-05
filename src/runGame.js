import readlineSync from 'readline-sync'

const runGame = (description, generateQuestion) => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)
  // ... rest remains the same

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestion()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (String(userAnswer) !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
      return // Завершаем игру при неправильном ответе
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGame
