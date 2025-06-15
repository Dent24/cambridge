import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(async (nuxtApp) => {
  const messages = await import(`../locales/zh-TW.json`) // 預設語言
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zh-TW',
    fallbackLocale: 'en',
    messages: {
      'zh-TW': messages.default,
    },
  })

  nuxtApp.vueApp.use(i18n)
})