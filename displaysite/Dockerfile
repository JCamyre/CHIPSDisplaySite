FROM node:16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm update --force
RUN npm i --force
CMD ["npm", "run", "start"]

