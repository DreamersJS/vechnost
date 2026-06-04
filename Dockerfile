FROM node:20-slim
#FROM node:18-bullseye-slim
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
