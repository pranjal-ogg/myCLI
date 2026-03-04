"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeCommand = void 0;
const Command_1 = require("../cli_engine/Command");
const chalk_1 = __importDefault(require("chalk"));
const axios_1 = __importDefault(require("axios"));
class JokeCommand extends Command_1.Command {
    register() {
        this.program
            .command('joke')
            .description('Get a random programming joke (API 4)')
            .action(async () => {
            await this.execute();
        });
    }
    async execute() {
        try {
            const response = await axios_1.default.get('https://v2.jokeapi.dev/joke/Programming?type=twopart');
            const data = response.data;
            if (data.error) {
                console.error(chalk_1.default.red('Could not fetch joke.'));
                return;
            }
            console.log(chalk_1.default.blue(`\nSetup: ${data.setup}`));
            setTimeout(() => {
                console.log(chalk_1.default.green(`Punchline: ${data.delivery}\n`));
            }, 1000);
        }
        catch (error) {
            console.error(chalk_1.default.red(`Error fetching joke: ${error.message}`));
        }
    }
}
exports.JokeCommand = JokeCommand;
