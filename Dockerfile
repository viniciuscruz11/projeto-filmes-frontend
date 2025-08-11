# Use a imagem Node.js como base
FROM node:16 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Compila o aplicativo React
RUN npm run build

# Usa a imagem Nginx para servir o aplicativo
FROM nginx:alpine

# Copia os arquivos de build para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]