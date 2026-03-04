"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetCommand = void 0;
const Command_1 = require("../cli_engine/Command");
const chalk_1 = __importDefault(require("chalk"));
class GreetCommand extends Command_1.Command {
    register() {
        this.program
            .command('greet <name>')
            .description('Greet a person by name')
            .action((name) => {
            this.execute(name);
        });
    }
    execute(name) {
        console.log(chalk_1.default.green(`Hello, ${name}! Welcome to the CLI.`));
    }
}
exports.GreetCommand = GreetCommand;
