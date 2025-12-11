#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# Переименуем ветку в main
git branch -M main

# Используем HTTPS вместо SSH
git push -f https://github.com/Achilovraf/daantec-website.git main:gh-pages

cd -