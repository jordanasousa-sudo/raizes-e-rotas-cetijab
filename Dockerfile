FROM nginx:1.27-alpine

# Copia a configuração personalizada do Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos do website Raízes e Rotas · CETIJAB
COPY index.html /usr/share/nginx/html/index.html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY assets /usr/share/nginx/html/assets

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
