# Stage 1 - Build
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

# Stage 2 - Distroless
FROM gcr.io/distroless/nodejs18

WORKDIR /app
COPY --from=builder /app .

CMD ["index.js"]

