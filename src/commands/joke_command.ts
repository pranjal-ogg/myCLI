import { Command } from '../cli_engine/Command';
import chalk from 'chalk';
import axios from 'axios';

export class JokeCommand extends Command {
    register(): void {
        this.program
            .command('joke')
            .description('Get a random programming joke (API 4)')
            .action(async () => {
                await this.execute();
            });
    }

    async execute(): Promise<void> {
        try {
            const response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart');
            const data = response.data;
            if (data.error) {
                console.error(chalk.red('Could not fetch joke.'));
                return;
            }
            console.log(chalk.blue(`\nSetup: ${data.setup}`));
            setTimeout(() => {
                console.log(chalk.green(`Punchline: ${data.delivery}\n`));
            }, 1000);
        } catch (error: any) {
            console.error(chalk.red(`Error fetching joke: ${error.message}`));
        }
    }
}
