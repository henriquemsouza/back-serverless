#!/bin/bash

echo -e "\nš  starting application š"
yarn install
echo -e "\nš  running migrations š...š...š"
yarn migration:up
echo -e "\nš„ļø  start server š„ļø... š„ļø"
yarn start:dev