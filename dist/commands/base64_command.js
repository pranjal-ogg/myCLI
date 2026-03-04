"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64Command = void 0;
const Command_1 = require("../cli_engine/Command");
const chalk_1 = __importDefault(require("chalk"));
class Base64Command extends Command_1.Command {
    register() {
        this.program
            .command('base64 <text>')
            .description('Encode or decode text in Base64')
            .option('-d, --decode', 'Decode instead of encode')
            .action((text, options) => {
            this.execute(text, options.decode);
        });
    }
    execute(text, decode) {
        try {
            if (decode) {
                const decoded = Buffer.from(text, 'base64').toString('utf-8');
                console.log(chalk_1.default.green(`Decoded: ${decoded}`));
            }
            else {
                const encoded = Buffer.from(text, 'utf-8').toString('base64');
                console.log(chalk_1.default.cyan(`Encoded: ${encoded}`));
            }
        }
        catch (error) {
            console.error(chalk_1.default.red(`Error processing base64: ${error.message}`));
        }
    }
}
exports.Base64Command = Base64Command;
