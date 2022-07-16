aa# CHIPSDisplaySite

## How to running locally
https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/ (for reference)

`docker-compose up --build`


### Testing each app individually

`cd displaysite`

`docker build -f Dockerfile -t displaysite .`

`docker run -it -p 4001:3000 displaysite`

`cd api`

`docker build -f Dockerfile -t api .`

`docker run -it -p 4002:3001 api`

### Additional Info
Builds, (re)creates, starts, and attaches to containers for a service.

Unless they are already running, this command also starts any linked services.

The --legacy-peer-deps tells the npm to ignore the peer dependencies and continue the installation of the package.
