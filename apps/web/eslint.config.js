import nextVitals from "eslint-config-next/core-web-vitals"

/** @type {import("eslint").Linter.Config} */
const config = [
  {
    ignores: [".next/**"],
  },
  ...nextVitals,
  {
    rules: {
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
]

export default config
