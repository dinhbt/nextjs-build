# Guildline setup postbuild.js

### 1. Yarn install

Using fs-extra to copy file: `yarn add fs-extra --dev` <br>
Using chalk to log color please use version 4: `yarn add chalk@4 --dev`

### 2. Add script package.json

Please add node postbuild.js like as on bellow

```
 "scripts": {
    "build": "next build && node postbuild.js"
  },
```

### 3. Run server

`node cd dist/standalone/server.js`
