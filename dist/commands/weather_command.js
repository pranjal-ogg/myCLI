"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherCommand = void 0;
const Command_1 = require("../cli_engine/Command");
const chalk_1 = __importDefault(require("chalk"));
const axios_1 = __importDefault(require("axios"));
class WeatherCommand extends Command_1.Command {
    register() {
        this.program
            .command('weather <city>')
            .description('Get the current weather for a city (API 2)')
            .option('-f, --format <number>', 'Format of the weather output (1-4)', '3')
            .action(async (city, options) => {
            await this.execute(city, options.format);
        });
    }
    async execute(city, format) {
        try {
            console.log(chalk_1.default.yellow(`Fetching weather for: ${city}...`));
            const response = await axios_1.default.get(`https://wttr.in/${city}?format=${format}`);
            console.log(chalk_1.default.cyan(`\nWeather Info:\n${response.data.trim()}`));
        }
        catch (error) {
            console.error(chalk_1.default.red(`Error fetching weather: ${error.message}`));
        }
    }
}
exports.WeatherCommand = WeatherCommand;
