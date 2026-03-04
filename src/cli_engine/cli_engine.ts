import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';

export class CliEngine {
    private program: CommanderCommand;

    constructor() {
        this.program = new CommanderCommand();
        // Setup global options or descriptions
        this.program
            .name('mycli')
            .description('A fully functional CLI tool built with Node and TypeScript')
            .version('1.0.0');
    }

    public registerCommands(commands: (new (program: CommanderCommand) => Command)[]): void {
        commands.forEach((CommandClass) => {
            const commandInstance = new CommandClass(this.program);
            commandInstance.register();
        });
    }

    public run(): void {
        this.program.parse(process.argv);
    }
}
