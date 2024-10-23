FROM node:latest as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx
COPY --from=builder /usr/src/app/dist/mysite/browser /usr/share/nginx/html
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/settings.template.json > /usr/share/nginx/html/settings.json && exec nginx -g 'daemon off;'"]
