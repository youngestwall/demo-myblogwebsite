#!/bin/sh

# Replace environment variables in nginx config
envsubst '${PORT} ${DOMAIN} ${CORS_ORIGIN}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Execute CMD
exec "$@"