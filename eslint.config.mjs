// Native ESLint 9 flat config.
// The previous FlatCompat-based setup crashed on ESLint >= 9.39
// ("Converting circular structure to JSON"), so `npm run lint` never ran.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"],
  },
  ...(Array.isArray(nextCoreWebVitals) ? nextCoreWebVitals : [nextCoreWebVitals]),
  ...(Array.isArray(nextTypescript) ? nextTypescript : [nextTypescript]),
];

export default eslintConfig;
