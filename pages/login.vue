<template>
  <div>
    <v-card class="pa-4" width="400" variant="text">
      <v-card-title class="text-center">{{ $t('login.title') }}</v-card-title>
      <v-card-text>
        <v-btn rounded="xl" size="x-large" block variant="outlined"  color="orange-darken-1" @click="loginDialog = true">{{ $t('login.byPhone') }}</v-btn>
      </v-card-text>
    </v-card>

    <v-dialog v-model="loginDialog" max-width="500">
      <v-card :title="$t('login.phone')">
        <v-card-text>
          <v-form ref="form">
            <v-text-field v-model="phone" :label="$t('login.phone')" :rules="phoneRules" :disabled="isSendSms" />
            <v-row v-if="isSendSms">
              <v-col cols="9">
                <v-text-field v-model="sms" :label="$t('login.sms')" :rules="smsRules" />
              </v-col>
              <v-col cols="3">
                <v-btn class="mt-3" rounded="xl" block variant="outlined"  color="orange-darken-1" @click="reSend">{{ $t('login.reSend') }}</v-btn>
              </v-col>
            </v-row>
          </v-form>
          <v-alert v-if="smsError" :text="$t('login.smsError')" type="error" />
        </v-card-text>
        <v-card-actions>
          <v-btn rounded="xl" size="large" block variant="outlined"  color="orange-darken-1" @click="login">{{ isSendSms ? $t('login.submit') : $t('login.sendSms') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
const { $axios } = useNuxtApp()
const router = useRouter()
const userStore = useUserStore()

useHead({
  title: '登入'
})

definePageMeta({
  layout: 'clear'
})

const loginDialog = ref(false)
const form = ref()
const phone = ref('')
const phoneRules = ref([
  (v:string) => !!v || '請填入手機號碼',
  (v:string) => /^[0-9]{10}$/.test(v) || '手機號碼格式錯誤'
])
const isSendSms = ref(false)
const sms = ref('')
const smsRules = ref([
  (v:string) => !!v || '請填入驗證碼',
  (v:string) => /^[0-9]{6}$/.test(v) || '驗證碼格式錯誤'
])
const smsError = ref(false)

const login = async () => {
  const { valid } = await form.value.validate()
  if (valid) {
    if (!isSendSms.value) {
      const rs = await $axios.auth.login(phone.value)
      if (!!rs) {
        isSendSms.value = true
      } else {
        router.push({ name: 'register', query: { phone: phone.value } })
      }
    } else {
      smsError.value = false
      const rs = await $axios.auth.checkSms(phone.value, sms.value)
      if (!!rs) {
        const userRs = await $axios.user.getProfile(phone.value)
        if (userRs) {
          userStore.setUserInfo(userRs)
          router.push('/home')
        }
      } else {
        smsError.value = true
      }
    }
  }
}
const reSend = async () =>{
  const rs = await $axios.auth.reSendSms(phone.value)
  if (!!rs) {
    sms.value = ''
  }
}
</script>

<style scoped lang="scss">
.v-card {
  background: #fff;
}
</style>