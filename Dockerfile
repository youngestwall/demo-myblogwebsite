# Use Nginx as base image for hosting static website
FROM nginx:alpine

# Copy the static website files to Nginx's default public directory
COPY . /usr/share/nginx/html/

# Remove the default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]