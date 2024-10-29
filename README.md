# NBA Skins Draft Results

Small web app to keep track of player totals for the NBA skins draft.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

<br>

## 💫 Syncing new NBA standings data

An API key in required to pull this data. Please create `.env` file in the root directory and set a value under the key `RAPIDAPI_KEY`. Then, simply run `./bin/refresh-s3.sh` from the root directory in the terminal.

❗ _If there are insufficient permissions to execute script, run the following:_ `chmod +x ./bin/refresh-s3/sh` 