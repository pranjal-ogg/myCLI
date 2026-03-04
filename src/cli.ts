#!/usr/bin/env node

import { CliEngine } from './cli_engine/cli_engine';

import { GreetCommand } from './commands/greet_command';
import { FileInfoCommand } from './commands/fileinfo_command';
import { GithubCommand } from './commands/github_command';
import { WeatherCommand } from './commands/weather_command';
import { QuoteCommand } from './commands/quote_command';
import { JokeCommand } from './commands/joke_command';
import { PokemonCommand } from './commands/pokemon_command';
import { Base64Command } from './commands/base64_command';
import { UuidCommand } from './commands/uuid_command';
import { MathCommand } from './commands/math_command';

const engine = new CliEngine();

engine.registerCommands([
    GreetCommand,
    FileInfoCommand,
    GithubCommand,
    WeatherCommand,
    QuoteCommand,
    JokeCommand,
    PokemonCommand,
    Base64Command,
    UuidCommand,
    MathCommand
]);

engine.run();