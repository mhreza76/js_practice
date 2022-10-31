### environment setup

```node
npm install -g yarn
yarn set version latest
```

#### Install the below extensions

- ESLint
- Prettier

#### Settings

Go to your Visual Stuido Code **settings.json** file and add the below settings there:

```json
// config related to code formatting
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": null
},
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.organizeImports": true
},
"eslint.alwaysShowStatus": true
```

### Setup Linting Configuration file

Create a **.eslintrc.json** file in the project root and enter the below contents:

```json
{
  "extends": ["prettier", "airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "env": {
    "commonjs": true,
    "node": true
  },
  "rules": {
    "no-console": 0,
    "indent": 0,
    "linebreak-style": 0,
    "unicorn/number-literal-case": "off",
    "max-classes-per-file": "off",
    // "class-methods-use-this": "off",
    "no-var": "off",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true,
        "endOfLine": "auto"
      }
    ]
  },
  "plugins": ["prettier"]
}
```

### Install Dev Dependencies

```yarn
yarn add -D eslint prettier
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

### nodemon

nodemon will restart the file when any changed will be saved in the file.

```js
npx nodemon filename
```
