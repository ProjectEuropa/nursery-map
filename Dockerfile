FROM tiangolo/uwsgi-nginx-flask:python3.6

COPY ./app /app

#WORKDIR /var/www/html