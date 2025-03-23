import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Add custom rules to override defaults
    rules: {
      // Disable the rule that disallows the 'any' type
      "@typescript-eslint/no-explicit-any": "off",
      // Optionally, allow 'any' in specific contexts (e.g., function parameters)
      // "@typescript-eslint/no-explicit-any": ["warn", { "ignoreRestArgs": true }],
    },
  },
];
export default eslintConfig;
