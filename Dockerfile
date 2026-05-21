FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# FINAL 
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV NEW_RELIC_LOG=stdout

EXPOSE 3000

CMD ["npm", "start"]