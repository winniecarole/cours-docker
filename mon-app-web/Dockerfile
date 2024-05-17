# Utiliser une image de base officielle de Node.js
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json  ./


# Installer les dépendances
RUN npm install

# Copier les fichiers sources du projet dans le répertoire de travail
COPY ./src ./src

# Exposer le port sur lequel l'application va écouter
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["npm", "start"]
