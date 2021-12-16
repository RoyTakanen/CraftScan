FROM alpine:3.14

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/community' >> /etc/apk/repositories

RUN apk add  --no-cache mongodb-tools

RUN apk add  --no-cache wget

VOLUME [ "/data" ]

WORKDIR /data

CMD mongoimport --uri $MONGO_URI --drop --collection ip2location --type csv --file "/data/IP2LOCATION-LITE-DB1.CSV" --fields ip_from,ip_to,country_code,country_name

