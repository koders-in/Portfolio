# Builder already added via Github Actions
# Uncomment for full workflow action
# FROM node:slim as build-stage
# ENV NODE_OPTIONS=--openssl-legacy-provider
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY . .
# RUN npm ci --force
# RUN npm run build
# FROM nginx:stable-alpine
# COPY --from=build-stage /app/build/ /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:16-slim
# WORKDIR /app
# COPY build/ ./build/
# EXPOSE 80
# RUN npm install -g serve
# CMD ["serve", "-s", "build", "-p", "80"]

FROM node:16-slim as builder

WORKDIR /app

COPY package*.json ./

RUN npm install -g

COPY . .

RUN npm ci --force
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app /usr/share/nginx/html

EXPOSE 81

CMD ["nginx", "-g", "daemon off;"]
