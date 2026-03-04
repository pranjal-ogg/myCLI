import { Command } from '../cli_engine/Command';
import chalk from 'chalk';
import axios from 'axios';

export class WeatherCommand extends Command {
    register(): void {
        this.program
            .command('weather <city>')
            .description('Get the current weather for a city (API 2)')
            .option('-f, --format <number>', 'Format of the weather output (1-4)', '3')
            .action(async (city: string, options: any) => {
                await this.execute(city, options.format);
            });
    }

    async execute(city: string, format: string): Promise<void> {
        try {
            console.log(chalk.yellow(`Fetching weather for: ${city}...`));
            const response = await axios.get(`https://wttr.in/${city}?format=${format}`);
            console.log(chalk.cyan(`\nWeather Info:\n${response.data.trim()}`));
        } catch (error: any) {
            console.error(chalk.red(`Error fetching weather: ${error.message}`));
        }
    }
}
