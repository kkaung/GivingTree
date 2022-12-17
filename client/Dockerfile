FROM node:alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@13

COPY . .

CMD ["ng", "serve", "--open"]