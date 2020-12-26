rm -rf ./dist
mkdir -p dist/libs
cp -a node_modules/lz-string/libs/lz-string.min.js dist/libs

if [ x`git symbolic-ref -q HEAD --short` = xmain ]; then
  url="https://flingcode.netlify.app"
else
  url="https://test-flingcode.netlify.app"
fi
sed -e "s!@url@!${url}!g" < index.html > dist/index.html
cp -a images dist
