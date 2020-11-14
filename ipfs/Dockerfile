FROM node:12

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm ci --no-save

EXPOSE 8886

CMD ["npm", "run", "start"]
