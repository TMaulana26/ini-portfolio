import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginOxlint from 'eslint-plugin-oxlint'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  // Vue i18n eslint rules cast to avoid EcmaVersion type mismatch in eslint config without using 'any'
  ...(vueI18n.configs['flat/recommended'] as unknown as Parameters<typeof defineConfigWithVueTs>),

  {
    name: 'app/i18n-custom-rules',
    settings: {
      'vue-i18n': {
        localeDir: './src/locales/*.json',
        messageSyntaxVersion: '^9.0.0'
      }
    },
    rules: {
      '@intlify/vue-i18n/no-raw-text': [
        'error',
        {
          attributes: {
            '/.+/': ['title', 'aria-label', 'aria-valuetext', 'placeholder']
          },
          ignorePattern: '^[-#+*()&%@$!?,.\\d\\s/|:]+$'
        }
      ]
    }
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
)
