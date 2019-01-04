module.exports = {
  "env": {
    "browser": true,
    "jest": true
  },
  "plugins": [
    "react"
  ],
  "extends": ["airbnb", "plugin:react/recommended"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
};