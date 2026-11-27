import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import JavaScriptObfuscator from 'javascript-obfuscator'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    sourcemap: false,
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'obfuscate-production',
      apply: 'build',
      enforce: 'post',
      renderChunk(code) {
        const result = JavaScriptObfuscator.obfuscate(code, {
          target: 'browser',
          compact: true,
          identifierNamesGenerator: 'hexadecimal',
          renameGlobals: false,
          renameProperties: false,
          stringArray: true,
          stringArrayThreshold: 0.5,
          stringArrayEncoding: ['base64'],
          controlFlowFlattening: false,
          deadCodeInjection: false,
          debugProtection: false,
          selfDefending: false,
          sourceMap: false,
          seed: 231,
        })
        return { code: result.getObfuscatedCode(), map: null }
      },
    },
  ],
})
