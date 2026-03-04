import { Command } from '../cli_engine/Command';
import chalk from 'chalk';

export class MathCommand extends Command {
    register(): void {
        this.program
            .command('math <operation> <n1> <n2>')
            .description('Perform basic math (add, sub, mul, div)')
            .action((operation: string, n1: string, n2: string) => {
                this.execute(operation, Number(n1), Number(n2));
            });
    }

    execute(operation: string, n1: number, n2: number): void {
        if (isNaN(n1) || isNaN(n2)) {
            console.error(chalk.red('Please provide valid numbers.'));
            return;
        }

        let result: number;

        switch (operation.toLowerCase()) {
            case 'add':
                result = n1 + n2;
                break;
            case 'sub':
                result = n1 - n2;
                break;
            case 'mul':
                result = n1 * n2;
                break;
            case 'div':
                if (n2 === 0) {
                    console.error(chalk.red('Cannot divide by zero.'));
                    return;
                }
                result = n1 / n2;
                break;
            default:
                console.error(chalk.red(`Unknown operation '${operation}'. Use add, sub, mul, div.`));
                return;
        }

        console.log(chalk.green(`Result of ${n1} ${operation} ${n2} = ${result}`));
    }
}
