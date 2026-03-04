import { Command } from '../cli_engine/Command';
import chalk from 'chalk';

export class Base64Command extends Command {
    register(): void {
        this.program
            .command('base64 <text>')
            .description('Encode or decode text in Base64')
            .option('-d, --decode', 'Decode instead of encode')
            .action((text: string, options: any) => {
                this.execute(text, options.decode);
            });
    }

    execute(text: string, decode: boolean): void {
        try {
            if (decode) {
                const decoded = Buffer.from(text, 'base64').toString('utf-8');
                console.log(chalk.green(`Decoded: ${decoded}`));
            } else {
                const encoded = Buffer.from(text, 'utf-8').toString('base64');
                console.log(chalk.cyan(`Encoded: ${encoded}`));
            }
        } catch (error: any) {
            console.error(chalk.red(`Error processing base64: ${error.message}`));
        }
    }
}
