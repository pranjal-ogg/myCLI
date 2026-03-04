"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliEngine = void 0;
const commander_1 = require("commander");
class CliEngine {
    constructor() {
        this.program = new commander_1.Command();
        // Setup global options or descriptions
        this.program
            .name('mycli')
            .description('A fully functional CLI tool built with Node and TypeScript')
            .version('1.0.0');
    }
    registerCommands(commands) {
        commands.forEach((CommandClass) => {
            const commandInstance = new CommandClass(this.program);
            commandInstance.register();
        });
    }
    run() {
        this.program.parse(process.argv);
    }
}
exports.CliEngine = CliEngine;
