FROM nginx
WORKDIR /irh-dashboard
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN rm -r /usr/share/nginx/html/*
RUN cp -a dist/. /usr/share/nginx/html
RUN cp -a public/. /usr/share/nginx/html
