#!/usr/bin/env bash

pushd frontend/quotator
yarn
ng build --prod
popd

rm -r release 
mkdir release
cp backend/*.py release/
cp -r frontend/quotator/dist/quotator release/quotator
