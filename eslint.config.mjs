import globals from "globals"
import js from "@eslint/js"

export default [
    {
        name: "default",
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            globals: {
                ...globals.node,
            }
        },
        rules: {
            ...js.configs.recommended.rules,
        }
    },
]
