"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathCommand = void 0;
const Command_1 = require("../cli_engine/Command");
const chalk_1 = __importDefault(require("chalk"));
class MathCommand extends Command_1.Command {
    register() {
        this.program
            .command('math <operation> <n1> <n2>')
            .description('Perform basic math (add, sub, mul, div)')
            .action((operation, n1, n2) => {
            this.execute(operation, Number(n1), Number(n2));
        });
    }
    execute(operation, n1, n2) {
        if (isNaN(n1) || isNaN(n2)) {
            console.error(chalk_1.default.red('Please provide valid numbers.'));
            return;
        }
        let result;
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
                    console.error(chalk_1.default.red('Cannot divide by zero.'));
                    return;
                }
                result = n1 / n2;
                break;
            default:
                console.error(chalk_1.default.red(`Unknown operation '${operation}'. Use add, sub, mul, div.`));
                return;
        }
        console.log(chalk_1.default.green(`Result of ${n1} ${operation} ${n2} = ${result}`));
    }
}
exports.MathCommand = MathCommand;
