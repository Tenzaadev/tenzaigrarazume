#!/usr/bin/env node
import welcomeUser from '../src/cli.js'

const name = welcomeUser()
console.log(`Hello, ${name}!`)
