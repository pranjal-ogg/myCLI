"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInfoCommand = void 0;
const Command_1 = require("../cli_engine/Command");
const chalk_1 = __importDefault(require("chalk"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class FileInfoCommand extends Command_1.Command {
    register() {
        this.program
            .command('fileinfo <filename>')
            .description('Get basic information about a file')
            .action((filename) => {
            this.execute(filename);
        });
    }
    execute(filename) {
        try {
            const filePath = path.resolve(process.cwd(), filename);
            const stats = fs.statSync(filePath);
            console.log(chalk_1.default.blue(`File Information for: ${filename}`));
            console.log(`Size: ${stats.size} bytes`);
            console.log(`Created: ${stats.birthtime}`);
            console.log(`Modified: ${stats.mtime}`);
            console.log(`Is Directory.ts: ${stats.isDirectory()}`);
        }
        catch (error) {
            console.error(chalk_1.default.red(`Error reading file: ${error.message}`));
        }
    }
}
exports.FileInfoCommand = FileInfoCommand;
