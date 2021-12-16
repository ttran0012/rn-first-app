module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off"
    }
};
