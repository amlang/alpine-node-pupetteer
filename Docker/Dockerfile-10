FROM node:10-alpine

RUN apk update && apk add --no-cache chromium chromium-chromedriver nss freetype harfbuzz bash vim
RUN [[ `echo $NODE_VERSION | awk -F \. '{print $1}'` = '10' ]] && echo 'node 10 environment nothing to upgrade' || sed -i -e 's/v[[:digit:]]\.[[:digit:]]/edge/g' /etc/apk/repositories && apk upgrade --no-cache --available
RUN echo strict-ssl false > ~/.yarnrc && \
    echo strict-ssl=false > ~/.npmrc

RUN mkdir /app && \
    addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

# Run user as non privileged.
USER pptruser
ENV CHROME_BIN=/usr/bin/chromium-browser \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    NODE_ENV=develop 
WORKDIR /app
