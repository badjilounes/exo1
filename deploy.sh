#!/usr/bin/env bash

echo "Entrer le texte qui sera associé à ce commit."
read commit

echo "Entrer la branche à déployer."
read front_branch

git clone -b $front_branch https://github.com/badjilounes/exo1.git PrescriberClient || exit 1
git clone -b master https://git.heroku.com/prescriber-front.git NodeStatic || exit 1

cd PrescriberClient
yarn --network-timeout 1000000

cd ../NodeStatic
rm -rf ./public/*
git add *
git commit -am "Retrait du dernier build"

cd ../PrescriberClient
yarn cache clean

NODE=`which node`
NG=`which ng`
`$NODE --max_old_space_size=4096 $NG build --prod --aot`

rsync -d -r dist/new-app/ ../NodeStatic/public

cd ../NodeStatic
git add *
git commit -am "$commit"
git push origin master

cd ..

rm -rf PrescriberClient NodeStatic
