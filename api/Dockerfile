FROM node:alpine
# ig workdir is a folder in the container we are creating
# not something we currently have
# YES IT IS, EVERYTHING IN /app folder (in docker container)
WORKDIR /app
# copy files into root directory (/app)
COPY package.json ./
COPY package-lock.json ./
# not too sure why we have to copy package.json separately
# if we are copying everything
COPY ./ ./
# difference between RUN and CMD? RUN npm i vs CMD ["npm", "run", "start"] 
RUN npm i
CMD ["npm", "run", "start"]
