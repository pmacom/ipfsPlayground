FROM node:12

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm ci --no-save

RUN ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://patrickmacom.com:5001", "http://localhost:3000", "http://127.0.0.1:5001", "https://webui.ipfs.io"]'
RUN ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST"]'

EXPOSE 8886

CMD ["npm", "run", "start"]
