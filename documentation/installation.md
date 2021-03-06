# Installation

## Pre-requisites

NOTE: If you are planning to run `standup-slack-bot`  in docker, please refer to the [Docker](#docker) section below.

Before installing standup-bot, you'll need to have access to a:

- PostgreSQL database; and
- Slack API token

To get a Slack API token, you will need to create a bot integration from the Slack admin panel: <https://your-team.slack.com/apps/manage/custom-integrations> (replace `your-team` with your Slack team name).

## Setting up

```bash
git clone https://github.com/18F/standup-bot.git
cd standup-bot
npm install
```

Then, provide some environment variables.  If you have a `.env` file in the base directory, standup-bot will read from that.  The variables are:

Name         | Description
------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SLACK_TOKEN  | Slack API token, generated when you created the bot integration on Slack.  This value is required.
DATABASE_URL | The Postgres connection URL for your standup-bot database.  Defaults to `postgres://localhost/standup`.  The specified database must already exist, but it can be empty.
PORT         | The port for the built-in webserver to run on.  This server hosts the bot's API and documentation.  If omitted, the built-in webserver will not run.  If you don't want the webserver, just leave `PORT` out.
LOG_LEVEL    | Numeric value indicating the log level.  10 is verbose, 20 is info, 30 is warning, and 40 is error-only.  Defaults to 10.

## Running

Once everything is set up, to run standup-bot, simply run `npm start`.

## Docker

To skip all the manual steps above, you can run `standup-slack-bot` in [Docker](https://www.docker.com). The only pre-requisite after [installing docker](https://docs.docker.com/engine/installation/) would be [installing docker-compose](https://docs.docker.com/compose/install/).

Also ensure that your `.env` file has your `SLACK_TOKEN` in it:

    $ echo "SLACK_TOKEN=xoxb-<your slackbot API token>" > .env

only `SLACK_TOKEN` is required in `.env`. The rest of the required env variables are already specified in `docker-compose.yaml`.

Finally, to start with docker-compose:

    $ docker-compose up -d

## Testing

Tests are written in [cucumberjs](https://github.com/cucumber/cucumber-js).  To run them, just `npm test`.