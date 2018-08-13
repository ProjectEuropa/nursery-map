FROM tiangolo/uwsgi-nginx-flask:python3.6

COPY ./ /app

RUN apt-get update -y 
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs

RUN npm update -g npm

RUN npm install -g vue-cli
RUN npm install -g nuxt

RUN npm install -g create-nuxt-app

RUN pip install -U flask-cors

ENV HOST 0.0.0.0
ENV NGINX_HTTP_PORT_NUMBER="80" \ NGINX_HTTPS_PORT_NUMBER="443"

EXPOSE 3000
EXPOSE 80