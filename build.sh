#!/usr/bin/env bash

pushd frontend/quotator
yarn
ng build
cp -r dist/quotator ../release/
popd

cp backend/*.py dist/
cp -r frontend/release/quotator dist/quotator
