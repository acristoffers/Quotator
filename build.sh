#!/usr/bin/env bash

pushd frontend/quotator
yarn
ng build
popd

mkdir release
cp backend/*.py release/
cp -r frontend/quotator/dist release/quotator
