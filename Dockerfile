FROM tiangolo/uwsgi-nginx-flask:python3.6

COPY ./app /app

WORKDIR /web
RUN git clone https://github.com/ProjectEuropa/nursery-map.git napp

# flaskアプリケーションの起動
ENV FLASK_APP /web/napp/app/main.py
CMD flask run -h 0.0.0.0 -p $PORT