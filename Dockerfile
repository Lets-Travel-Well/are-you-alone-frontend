FROM node:18.16.0
WORKDIR /app

COPY package.json .

ADD . .
RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]