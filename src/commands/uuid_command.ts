import { Command } from '../cli_engine/Command';
import chalk from 'chalk';
import * as crypto from 'crypto';

export class UuidCommand extends Command {
    register(): void {
        this.program
            .command('uuid')
            .description('Generate a random UUID v4')
            .action(() => {
                this.execute();
            });
    }

    execute(): void {
        const id = crypto.randomUUID();
        console.log(chalk.green(`Generated UUID: ${id}`));
    }
}
