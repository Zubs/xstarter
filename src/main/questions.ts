import { blue } from 'chalk'
import { boxenConfig } from '../config/env'
import boxen from 'boxen'

export async function askQuestions () {
    const greeting = blue.bold('XStarter')

    const message = boxen(greeting, boxenConfig)

    console.log(message)
}
