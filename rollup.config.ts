import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import esbuild from "rollup-plugin-esbuild"
import dts from "rollup-plugin-dts"
import license from "rollup-plugin-license"
import { terser } from "rollup-plugin-terser"

const PACKAGE_JSON = require("./package.json")

// TODO: change calculator by your lib name
const PACKAGE_NAME = "calculator"

const GLOBALS = {
  ...PACKAGE_JSON.devDependencies,
}

export default [
  {
    input: "src/main.ts",

    external: [...Object.keys(GLOBALS)],

    watch: {
      include: "src/**",
    },

    plugins: [
      esbuild(),
      json({ compact: true }),
      commonjs(),
      nodeResolve(),
      license({
        banner: {
          content: PACKAGE_JSON.license,
          commentStyle: "ignored",
        },
      }),
      terser(),
    ],

    output: [
      /* Add other build format if you need
      {
        file: `${PACKAGE_NAME}/index.js`,
        format: "cjs",
        sourcemap: true,
        name: PACKAGE_NAME,
      },
      */
      {
        file: `${PACKAGE_NAME}/index.js`,
        format: "umd",
        sourcemap: true,
        name: PACKAGE_NAME,
      },
    ],
  },
  {
    input: "src/main.ts",

    output: [{ file: `${PACKAGE_NAME}/index.d.ts`, format: "es" }],

    plugins: [dts()],
  },
]
