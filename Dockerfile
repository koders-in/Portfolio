FROM node:16-slim as builder

WORKDIR /app

COPY . .

RUN npm ci --force
RUN npm run build

FROM nginx:alpine-slim

COPY --from=builder /app/build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
