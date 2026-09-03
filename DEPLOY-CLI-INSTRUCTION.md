When you copy deployment script, it gives you some wrong paths inside parameters:

```
appwrite client --project-id="000000000000000" && \
appwrite sites create-deployment \
    --site-id="000000000000000" \
    --code="./sites/nextjs" \
    --activate \
    --build-command="npm run build; npm cache clean --force; rm -rf node_modules;" \
    --install-command="rm -f package-lock.json; npm cache clean --force; npm install" \
    --output-directory="./.next"
```


To Make the script working: 
remove `./sites/nextjs` from `--code` parameter, and replace it with just `./`

Like here:

```
appwrite client --project-id="000000000000000" && \
appwrite sites create-deployment \
    --site-id="000000000000000" \
    --code="./" \
    --activate \
    --build-command="npm run build; npm cache clean --force; rm -rf node_modules;" \
    --install-command="rm -f package-lock.json; npm cache clean --force; npm install" \
    --output-directory="./.next"
```

And ALSO dont forget to place real IDs instead of `000000000000000`