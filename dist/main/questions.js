"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askQuestions = void 0;
const chalk_1 = require("chalk");
const env_1 = require("../config/env");
const boxen_1 = __importDefault(require("boxen"));
function askQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        const greeting = chalk_1.blue.bold('XStarter');
        const message = boxen_1.default(greeting, env_1.boxenConfig);
        console.log(message);
        // Set project name and template
        const projectName = [
            {
                name: 'project-name',
                type: 'input',
                message: `Project name: (${process.cwd()})`
            },
            {}
        ];
    });
}
exports.askQuestions = askQuestions;
