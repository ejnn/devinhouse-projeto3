#!/bin/sh

npx depcruise --config .dependency-cruiser.js -T dot src | dot -T svg | npx depcruise-wrap-stream-in-html > dependencycruiser.html

git add dependencycruiser.html
git commit -m "graph updated"
git push
