FROM debian:10-slim

ENV tmp_dir /tmp

RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
  && apt-get install -y nodejs

RUN npm install -g json-server

RUN touch /tmp/db.json

COPY ./db.json /tmp/db.json

ENTRYPOINT ["json-server", "--port", "80", "--host", "0.0.0.0"]

CMD ["/tmp/db.json"]