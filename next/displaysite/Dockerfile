FROM node:16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i --legacy-peer-deps
RUN npm update --force
CMD ["npm", "run", "start"]