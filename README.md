# MyCLI Tool

A fully functional CLI tool built with Node.js and TypeScript, following Object-Oriented Programming (OOP) principles. It includes 10 custom commands, integrates 5 external APIs, and utilizes colored outputs and robust data validation with Zod.

## Setup Instructions

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Build the project:**
    ```bash
    npm run build
    ```

3. **Link locally (Optional):**
    ```bash
    npm link
    ```
    This will allow you to run the `mycli` command globally on your machine from any directory. Alternatively, you can run `./dist/cli.js` directly or use `npm start -- <command>`.

## Available Commands:
*   `mycli greet <name>` - Greet a person by name.
*   `mycli fileinfo <filename>` - Get basic information about a file in your current directory.
*   `mycli github <username>` - Fetch GitHub user profile information. *(API #1)*
*   `mycli weather <city> [options]` - Get the current weather for a city. *(API #2)*
    *   Example: `mycli weather London -f 3`
*   `mycli quote` - Get a random inspirational quote. *(API #3)*
*   `mycli joke` - Get a random programming joke. *(API #4)*
*   `mycli pokemon <name>` - Get basic info about a Pokemon. *(API #5)*
*   `mycli base64 <text> [options]` - Encode or decode text in Base64.
    *   Example: `mycli base64 "hello world"` (encode)
    *   Example: `mycli base64 "aGVsbG8gd29ybGQ=" -d` (decode)
*   `mycli uuid` - Generate a random UUID v4.
*   `mycli math <operation> <n1> <n2>` - Perform basic math (`add`, `sub`, `mul`, `div`).

## Advanced Features Included
*   **OOP Structure:** Abstract `Command` class extended by all individual commands.
*   **Validation:** Implementation of `zod` for validating external API responses (used in API #1 and API #3).
*   **Colorized Output:** Using `chalk@4` to make text look beautiful.
*   **Command Flags/Options:** Used in `base64` (`-d` decode flag) and `weather` (`-f` format flag).
