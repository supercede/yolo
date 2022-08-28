# Base stage
FROM node:17.2-slim as base
RUN apt-get update && apt-get install -y \
    python \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*
ENV NODE_ENV=production
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json package-lock*.json ./
RUN npm ci && npm cache clean --force

# Development stage
FROM base as dev
ENV NODE_ENV=development
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --only=dev
CMD [ "npx", "nodemon", "./dist/api/index.js" ]

# Source code stage
FROM base as source
COPY --chown=node:node . .

# TS Build stage
FROM source as build
COPY --from=dev /app/node_modules /app/node_modules
RUN npm run build

# Production final stage
FROM build as prod
COPY --from=build /app/dist /app/dist

EXPOSE 5000

CMD ["npm", "./dist/api/index.js"]
