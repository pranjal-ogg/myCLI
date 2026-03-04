"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCommand = void 0;
const Command_1 = require("../cli_engine/Command");
const chalk_1 = __importDefault(require("chalk"));
const axios_1 = __importDefault(require("axios"));
const zod_1 = require("zod");
const QuoteSchema = zod_1.z.object({
    quote: zod_1.z.string(),
    author: zod_1.z.string()
});
class QuoteCommand extends Command_1.Command {
    register() {
        this.program
            .command('quote')
            .description('Get a random quote (API 3)')
            .action(async () => {
            await this.execute();
        });
    }
    async execute() {
        try {
            const response = await axios_1.default.get('https://dummyjson.com/quotes/random');
            const data = QuoteSchema.parse(response.data);
            console.log(chalk_1.default.magenta(`\n"${data.quote}"`));
            console.log(chalk_1.default.green(`- ${data.author}\n`));
        }
        catch (error) {
            console.error(chalk_1.default.red(`Error fetching quote: ${error.message}`));
        }
    }
}
exports.QuoteCommand = QuoteCommand;
