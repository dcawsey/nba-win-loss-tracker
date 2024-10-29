# Get all env variables from .env file
set -a; source .env; set +a

curl --location 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2024' \
--header 'x-rapidapi-host: api-nba-v1.p.rapidapi.com' \
--header "x-rapidapi-key: $RAPIDAPI_KEY" \
| jq . > ./response.json

rm ./src/data/standings.json

mv ./response.json ./src/data/standings.json

npm run build

aws s3 sync ./dist s3://nba-skins-draft/
