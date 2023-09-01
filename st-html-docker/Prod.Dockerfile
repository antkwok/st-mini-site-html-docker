FROM nginx:stable-alpine

RUN apk add --no-cache tzdata
ENV TZ=Asia/Hong_Kong

# useful tools
RUN apk add --no-cache busybox-extras
RUN apk add --no-cache bind-tools

# Set working directory
WORKDIR /var/www

# Copy existing application directory permissions
#RUN chown -R www-data:www-data /var/www/

COPY . .

# Setup nginx & supervisor as root user
#USER root
#RUN apk add --no-progress --quiet --no-cache nginx supervisor
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Apply the required changes to run nginx as www-data user
#RUN apk add --no-cache nginx
#RUN chown -R www-data:www-data /run/nginx /var/lib/nginx /var/log/nginx && \
#    sed -i '/user nginx;/d' /etc/nginx/nginx.conf
# Switch to www-user
#USER www-data
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
