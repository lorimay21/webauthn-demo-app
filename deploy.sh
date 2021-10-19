#!/usr/bin/env sh
# abort on errors
set -e

# Copy config.js.org to config.js
cp ./src/config.js.org ./src/config.js

# build
npm run build

# navigate into the build output directory
cd www

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lorimay21/webauthn-demo-app.git master:gh-pages
cd -