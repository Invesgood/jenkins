# Gunakan image nginx sebagai base
FROM nginx:alpine

# Hapus konten default Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy file HTML, CSS, JS, image kamu ke folder Nginx
COPY . /usr/share/nginx/html

# Container akan expose port 80