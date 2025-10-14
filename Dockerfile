# Use the official nginx image
FROM nginx:alpine

# Install envsubst
RUN apk add --no-cache gettext

# Copy nginx configuration template
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template

# Copy website files
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Use entrypoint script to substitute env variables
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]