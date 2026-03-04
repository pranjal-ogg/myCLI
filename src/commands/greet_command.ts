import { Command } from '../cli_engine/Command';
import chalk from 'chalk';

export class GreetCommand extends Command {
    register(): void {
        this.program
            .command('greet <name>')
            .description('Greet a person by name')
            .action((name: string) => {
                this.execute(name);
            });
    }

    execute(name: string): void {
        console.log(chalk.green(`Hello, ${name}! Welcome to the CLI.`));
    }
}