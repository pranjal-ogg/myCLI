import { Command } from '../cli_engine/Command';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';

export class FileInfoCommand extends Command {
    register(): void {
        this.program
            .command('fileinfo <filename>')
            .description('Get basic information about a file')
            .action((filename: string) => {
                this.execute(filename);
            });
    }

    execute(filename: string): void {
        try {
            const filePath = path.resolve(process.cwd(), filename);
            const stats = fs.statSync(filePath);
            console.log(chalk.blue(`File Information for: ${filename}`));
            console.log(`Size: ${stats.size} bytes`);
            console.log(`Created: ${stats.birthtime}`);
            console.log(`Modified: ${stats.mtime}`);
            console.log(`Is Directory.ts: ${stats.isDirectory()}`);
        } catch (error: any) {
            console.error(chalk.red(`Error reading file: ${error.message}`));
        }
    }
}
