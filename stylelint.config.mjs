/** @type {import('stylelint').Config} */
export default {
  rules: {
    "block-no-empty": true,
    "scss/dollar-variable-pattern": "^[a-z][a-zA-Z0-9\\-]*$", // разрешаем и camelCase и kebab-case
  },
  extends: ["stylelint-config-standard-scss"],
}
