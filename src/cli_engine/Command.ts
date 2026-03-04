import { Command as CommanderCommand } from 'commander';

export abstract class Command {
    protected program: CommanderCommand;

    constructor(program: CommanderCommand) {
        this.program = program;
    }

    /**
     * Implement this method to configure and register the command with commander.
     */
    abstract register(): void;

    /**
     * Optional method if we want to run some logic, or it can be done directly inside action() 
     */
    abstract execute(...args: any[]): void | Promise<void>;
}
