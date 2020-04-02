module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "parseOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
    },
    "plugins": [
        "json",
        "jest"
    ]
};