import { Command } from '../cli_engine/Command';
import chalk from 'chalk';
import axios from 'axios';
import { z } from 'zod';

const GithubUserSchema = z.object({
    login: z.string(),
    name: z.string().nullable(),
    public_repos: z.number(),
    followers: z.number(),
    following: z.number(),
    html_url: z.string(),
});

export class GithubCommand extends Command {
    register(): void {
        this.program
            .command('github <username>')
            .description('Fetch GitHub user profile information (API 1)')
            .action(async (username: string) => {
                await this.execute(username);
            });
    }

    async execute(username: string): Promise<void> {
        try {
            console.log(chalk.yellow(`Fetching data for Github user: ${username}...`));
            const response = await axios.get(`https://api.github.com/users/${username}`);
            const data = GithubUserSchema.parse(response.data);

            console.log(chalk.green(`\n--- GitHub User: ${data.login} ---`));
            console.log(`Name: ${data.name || 'N/A'}`);
            console.log(`Repos: ${data.public_repos}`);
            console.log(`Followers: ${data.followers} | Following: ${data.following}`);
            console.log(`URL: ${data.html_url}`);
        } catch (error: any) {
            if (error?.response?.status === 404) {
                console.error(chalk.red('User not found.'));
            } else {
                console.error(chalk.red(`Error fetching data: ${error.message}`));
            }
        }
    }
}
