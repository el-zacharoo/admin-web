// or add "eslintConfig": {} to your package.json
// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        // "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "camelcase": ["error"],
        "prefer-template": "error",
        "prefer-const": "error",
        "eqeqeq": ["error", "smart"],
        "import/order": [
            "warn",
            {
                "groups": [
                    "builtin",
                    "external",
                    "internal"
                ],
                "pathGroups": [
                    {
                        "pattern": "react",
                        "group": "external",
                        "position": "before"
                    }
                ],
                "pathGroupsExcludedImportTypes": [
                    "react"
                ],
                "newlines-between": "always",
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ]
    }
}
