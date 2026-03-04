import { Command } from '../cli_engine/Command';
import chalk from 'chalk';
import axios from 'axios';

export class PokemonCommand extends Command {
    register(): void {
        this.program
            .command('pokemon <name>')
            .description('Get basic info about a Pokemon (API 5)')
            .action(async (name: string) => {
                await this.execute(name);
            });
    }

    async execute(name: string): Promise<void> {
        try {
            console.log(chalk.yellow(`Searching Pokedex for ${name}...`));
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            const data = response.data;

            console.log(chalk.cyan(`\n--- Pokemon: ${data.name.toUpperCase()} ---`));
            console.log(`ID: ${data.id}`);
            console.log(`Height: ${data.height / 10}m | Weight: ${data.weight / 10}kg`);
            const types = data.types.map((t: any) => t.type.name).join(', ');
            console.log(`Types: ${types}\n`);

        } catch (error: any) {
            if (error?.response?.status === 404) {
                console.error(chalk.red(`Pokemon '${name}' not found!`));
            } else {
                console.error(chalk.red(`Error fetching pokemon: ${error.message}`));
            }
        }
    }
}
