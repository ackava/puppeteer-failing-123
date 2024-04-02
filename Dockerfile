FROM ghcr.io/puppeteer/puppeteer:22.6.2
WORKDIR /app
COPY package*.json ./
COPY index.js ./
COPY node_modules ./node_modules/

ENTRYPOINT [ "npm", "run" ,"start" ]

