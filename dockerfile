# Gunakan image base Node.js
FROM node:14

# Set working directory
WORKDIR /app

# Copy file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file aplikasi
COPY . .

# Expose port 4000
EXPOSE 4000

# Jalankan aplikasi
CMD ["node", "index.js"]