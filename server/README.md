## A GrahpQL API for fetching events from a websocket endpoint.

### Prerequisites

Ensure you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)
- [Redis](https://redis.io/) or use the Redis docker image (`docker-compose.redis-only.yml`) or a cloud hosting service.
  - To use the redis docker compose file, run `docker compose -f docker-compose.redis-only.yml up`

### Technologies Used

- [NodeJS](https://nodejs.org/en/download/) - A cross-platform JavaScript runtime
- [ExpressJS](https://expressjs.com/) - NodeJS application framework
- [Apollo GraphQL](https://www.apollographql.com/) - A GraphQL implementation for NodeJS
- [Redis](https://redis.io/) - An open source, in-memory data store

### Installing/Running locally

- Clone the repo and navigate to the `server` folder

- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials (ensure to provide the correct details)

- Run `npm run dev` to start the server in development mode or `npm run start` to start the server in production mode

- Run `npm test` to run tests

### Docker

This application is ready to be executed in a Dockerized environment for local development purposes.

- To start the dockerized environment (api + database) run `docker-compose -f docker-compose.dev.yml up -d`
- Finally, to stop everything, simple run the following command `docker-compose down`.

## Documentation/Playground

[Apollo Studio](https://studio.apollographql.com/public/yodds/schema/reference?variant=current)
