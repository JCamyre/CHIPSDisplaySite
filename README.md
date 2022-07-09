# CHIPSDisplaySite

## How to running locally
https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/ (for reference)

`docker build -f Dockerfile -t client .`

`docker run -it -p 4001:3000 client`

`docker build -f Dockerfile -t server .`

`docker run -it -p 4002:3001 server`

`docker-compose up --build`
