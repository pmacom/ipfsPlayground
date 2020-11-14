FROM node:12

RUN mkdir /app
WORKDIR /app

COPY ./bundler.js ./package.json ./package-lock.json ./
RUN npm ci --no-save

EXPOSE 1234
EXPOSE 8885

CMD ["npm", "run", "bundle"]
