#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_engine_1 = require("./cli_engine/cli_engine");
const greet_command_1 = require("./commands/greet_command");
const fileinfo_command_1 = require("./commands/fileinfo_command");
const github_command_1 = require("./commands/github_command");
const weather_command_1 = require("./commands/weather_command");
const quote_command_1 = require("./commands/quote_command");
const joke_command_1 = require("./commands/joke_command");
const pokemon_command_1 = require("./commands/pokemon_command");
const base64_command_1 = require("./commands/base64_command");
const uuid_command_1 = require("./commands/uuid_command");
const math_command_1 = require("./commands/math_command");
const engine = new cli_engine_1.CliEngine();
engine.registerCommands([
    greet_command_1.GreetCommand,
    fileinfo_command_1.FileInfoCommand,
    github_command_1.GithubCommand,
    weather_command_1.WeatherCommand,
    quote_command_1.QuoteCommand,
    joke_command_1.JokeCommand,
    pokemon_command_1.PokemonCommand,
    base64_command_1.Base64Command,
    uuid_command_1.UuidCommand,
    math_command_1.MathCommand
]);
engine.run();
