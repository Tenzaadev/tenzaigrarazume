#!/usr/bin/env node
import runGame from '../src/runGame.js'
import { gcd, generationNumber } from '../src/helpers/helpers.js'

const generateGcdQuestion = () => {
  const a = generationNumber()
  const b = generationNumber()
  const question = `${a} ${b}`
  const correctAnswer = String(gcd(a, b))
  return [question, correctAnswer]
}

const description = 'Find the greatest common divisor of given numbers.'
runGame(description, generateGcdQuestion)
