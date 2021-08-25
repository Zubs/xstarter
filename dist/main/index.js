"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questions_1 = require("./questions");
questions_1.askQuestions();
console.log(process.cwd().split('/')[process.cwd().split('/').length - 1]);
