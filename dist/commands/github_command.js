"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubCommand = void 0;
const Command_1 = require("../cli_engine/Command");
const chalk_1 = __importDefault(require("chalk"));
const axios_1 = __importDefault(require("axios"));
const zod_1 = require("zod");
const GithubUserSchema = zod_1.z.object({
    login: zod_1.z.string(),
    name: zod_1.z.string().nullable(),
    public_repos: zod_1.z.number(),
    followers: zod_1.z.number(),
    following: zod_1.z.number(),
    html_url: zod_1.z.string(),
});
class GithubCommand extends Command_1.Command {
    register() {
        this.program
            .command('github <username>')
            .description('Fetch GitHub user profile information (API 1)')
            .action(async (username) => {
            await this.execute(username);
        });
    }
    async execute(username) {
        var _a;
        try {
            console.log(chalk_1.default.yellow(`Fetching data for Github user: ${username}...`));
            const response = await axios_1.default.get(`https://api.github.com/users/${username}`);
            const data = GithubUserSchema.parse(response.data);
            console.log(chalk_1.default.green(`\n--- GitHub User: ${data.login} ---`));
            console.log(`Name: ${data.name || 'N/A'}`);
            console.log(`Repos: ${data.public_repos}`);
            console.log(`Followers: ${data.followers} | Following: ${data.following}`);
            console.log(`URL: ${data.html_url}`);
        }
        catch (error) {
            if (((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                console.error(chalk_1.default.red('User not found.'));
            }
            else {
                console.error(chalk_1.default.red(`Error fetching data: ${error.message}`));
            }
        }
    }
}
exports.GithubCommand = GithubCommand;
