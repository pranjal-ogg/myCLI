import { Command } from '../cli_engine/Command';
import chalk from 'chalk';
import axios from 'axios';
import { z } from 'zod';

const QuoteSchema = z.object({
    quote: z.string(),
    author: z.string()
});

export class QuoteCommand extends Command {
    register(): void {
        this.program
            .command('quote')
            .description('Get a random quote (API 3)')
            .action(async () => {
                await this.execute();
            });
    }

    async execute(): Promise<void> {
        try {
            const response = await axios.get('https://dummyjson.com/quotes/random');
            const data = QuoteSchema.parse(response.data);

            console.log(chalk.magenta(`\n"${data.quote}"`));
            console.log(chalk.green(`- ${data.author}\n`));
        } catch (error: any) {
            console.error(chalk.red(`Error fetching quote: ${error.message}`));
        }
    }
}
