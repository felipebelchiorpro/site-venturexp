#!/bin/bash

# Atualiza o código do GitHub
git pull origin main

# Instala dependências e faz o build
npm install
npm run build

# Reinicia o processo no PM2
pm2 restart ecosystem.config.js --env production

echo "Venture XP atualizado com sucesso! 🚀"
