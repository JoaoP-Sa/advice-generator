FROM node:18.1.0

WORKDIR /app

RUN npm install -g @angular/cli

COPY . .

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--open", "--host", "0.0.0.0"]