# alpine-node-pupetteer
Docker Image with 
- Alpine Linux OS 
- NodeJS 6, 7, 8, 9 and 10 
- GoogleChrome/puppeteer

[![nodesource/node](http://dockeri.co/image/ivyowl/alpine-node-pupetteer)](https://hub.docker.com/r/ivyowl/alpine-node-pupetteer/)
## Tags
- `1.0.2` - node v 6 added; create:all script added
- `1.0.1` - bitbucket-pipeline added, better README
- `1.0.0` - initial FROM node:alpine-x

## Installation
```bash
# $> docker pull ivyowl/alpine-node-pupetteer:dockertag-nodeversion
$> docker pull ivyowl/alpine-node-pupetteer:1.0.2-9
# or
$> docker pull ivyowl/alpine-node-pupetteer:1.0.2-latest 
```

## Usage
- examples with GoogleChrome's/pupetteer comming soon

## Testing
```bash
$> git clone https://github.com/ivy-owl/alpine-node-pupetteer.git 
or
$> git clone https://bitbucket.org/ivyowl/alpine-node-pupetteer.git
$> cd alpine-node-pupetteer && yarn test:container
```

## License
MIT, see [LICENSE.md](./LICENSE.md) for more details.
