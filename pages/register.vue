<template>
  <div>
    <v-card class="pa-4 register" variant="text">
      <v-card-title class="text-center">{{ $t('register.title') }}</v-card-title>
      <v-card-text>
        <v-form ref="formRef">
          <v-text-field v-model="forms.name" :label="$t('register.name')" :rules="formRules.name" />
          <v-row>
            <v-col cols="8">
              <v-text-field v-model="forms.phone" :label="$t('register.phone')" disabled />
            </v-col>
            <v-col cols="4">
              <v-btn class="mt-3" rounded="xl" block variant="outlined"  color="orange-darken-1" @click="sendSms">{{ isSend ? $t('register.reSend') : $t('register.sendSms') }}</v-btn>
            </v-col>
          </v-row>
          <v-text-field v-if="isSend" v-model="forms.sms" :label="$t('register.sms')" :rules="formRules.sms" />
          <v-text-field v-model="forms.email" :label="$t('register.email')" :rules="formRules.email" />
          <v-radio-group v-model="forms.gender" :label="$t('register.gender')" :rules="formRules.gender" inline>
            <v-radio :label="$t('register.man')" :value="0" />
            <v-radio :label="$t('register.woman')" :value="1" />
          </v-radio-group>
          <v-text-field v-model="forms.age" :label="$t('register.age')" :rules="formRules.age" type="number" />
          <v-alert variant="outlined" v-if="errorMessages.length" type="error" class="mb-2">
            <p v-for="msg in errorMessages">{{ msg }}</p>
          </v-alert>
          <v-btn rounded="xl" size="large" block variant="outlined"  color="orange-darken-1" @click="submit" :disabled="!isSend">{{ $t('register.submit') }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'

const { $axios } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

definePageMeta({
  layout: 'clear',
  middleware: ['no-auth']
})

useHead({
  title: '註冊'
})

const formRef = ref()
const forms = ref({
  name: '',
  phone: '',
  sms: '',
  email: '',
  gender: null,
  age: 18,
})
const formRules = ref({
  name: [(v:string) => !!v || '請填入姓名'],
  sms: [
    (v:string) => !!v || '請填入驗證碼',
    (v:string) => /^[0-9]{6}$/.test(v) || '驗證碼格式錯誤'
  ],
  email: [
    (v:string) => !!v || '請填入電子信箱',
    (v:string) => /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(v) || '電子信箱格式錯誤'
  ],
  gender: [(v:number) => !!v || v === 0 || '請選擇性別'],
  age: [
    (v: number) => !!v || '請填入年齡',
    (v: number) => v >= 18 || '年齡需滿 18 歲'
  ]
})
const isSend = ref(false)
const errorMessages = ref([])

const sendSms = async () =>{
  const rs = await $axios.auth.reSendSms(forms.value.phone)
  if (!!rs) {
    isSend.value = true
  }
}
const submit = async () => {
  const { valid } = await formRef.value.validate()
  if (valid) {
    errorMessages.value = []
    const rs = await $axios.auth.register(forms.value)
    if (!rs.length) {
      userStore.setUserInfo(_.omit(forms.value, 'sms'))
      router.push('/home')
    } else {
      errorMessages.value = rs
    }
  }
}

onBeforeMount(() => {
  if (!route.query.phone) router.push('/login')
})

onMounted(() => {
  forms.value.phone = route.query.phone
})
</script>

<style scoped lang="scss">
.register {
  background: #fff;
  width: 400px;

  @media screen and (max-width: 400px) {
    width: 100vw;
  }
}
</style>