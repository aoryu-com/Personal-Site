FROM node:lts-slim as base

ARG PORT=3000

ENV NODE_ENV=production

WORKDIR /src

# Build
FROM base as build

COPY --link package.json package-lock.json ./
RUN npm install --production=false

COPY --link . .

RUN npm run generate
RUN npm prune


# Run
FROM nginx:stable-alpine

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE $PORT

CMD ["nginx-debug", "-g", "daemon off;"]
