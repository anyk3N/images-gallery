import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      "simple-import-sort": simpleImportSort // Добавляем плагин
    },
    extends: ["js/recommended", "airbnb"],
    rules: {

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "import/order": "off",
      "sort-imports": "off"
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
