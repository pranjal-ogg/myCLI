"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonCommand = void 0;
const Command_1 = require("../cli_engine/Command");
const chalk_1 = __importDefault(require("chalk"));
const axios_1 = __importDefault(require("axios"));
class PokemonCommand extends Command_1.Command {
    register() {
        this.program
            .command('pokemon <name>')
            .description('Get basic info about a Pokemon (API 5)')
            .action(async (name) => {
            await this.execute(name);
        });
    }
    async execute(name) {
        var _a;
        try {
            console.log(chalk_1.default.yellow(`Searching Pokedex for ${name}...`));
            const response = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            const data = response.data;
            console.log(chalk_1.default.cyan(`\n--- Pokemon: ${data.name.toUpperCase()} ---`));
            console.log(`ID: ${data.id}`);
            console.log(`Height: ${data.height / 10}m | Weight: ${data.weight / 10}kg`);
            const types = data.types.map((t) => t.type.name).join(', ');
            console.log(`Types: ${types}\n`);
        }
        catch (error) {
            if (((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                console.error(chalk_1.default.red(`Pokemon '${name}' not found!`));
            }
            else {
                console.error(chalk_1.default.red(`Error fetching pokemon: ${error.message}`));
            }
        }
    }
}
exports.PokemonCommand = PokemonCommand;
