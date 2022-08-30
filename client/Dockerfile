FROM node:17.2-slim as dependencies
WORKDIR /client
COPY package.json package-lock.json ./
RUN npm ci

FROM node:17.2-slim as builder
WORKDIR /client
COPY . .
COPY --from=dependencies /client/node_modules ./node_modules
RUN npm run build

FROM node:17.2-slim as runner
WORKDIR /client
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /client/next.config.js ./
COPY --from=builder /client/public ./public
COPY --from=builder /client/.next ./.next
COPY --from=builder /client/node_modules ./node_modules
COPY --from=builder /client/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]