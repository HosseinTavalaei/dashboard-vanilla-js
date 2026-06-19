import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig(
  {
    typescript: false,
    node: true,
    prettier: true,
  },
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          // trailingComma: "es5",
        },
      ],
    },
  },
);
