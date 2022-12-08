cd /root/Web04-Fitory
git fetch origin main
git reset --hard origin/main
git pull origin main
cd /root/Web04-Fitory/server
npm install package.json
rm -rf dist
npm run build
cd /root/Web04-Fitory/client
npm install --legacy-peer-deps
rm -rf dist
npm run build
pm2 reload all --update-env
