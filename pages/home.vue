<template>
  <div>
    <v-row class="main-area" no-gutters>
      <v-col v-for="(item, key) in nearBy" :cols="4" class="user-block">
        <HomeUserBlock :key="key" :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const { $axios } = useNuxtApp()

definePageMeta({
  middleware: ['auth']
})

useHead({
  title: '主頁'
})

const nearBy = ref([])

onBeforeMount(async () => {
  const rs = await $axios.user.getNearby()
  nearBy.value = rs
})
</script>

<style scoped lang="scss">
.main-area {
  width: 600px;
  background: #fff;

  @media screen and (max-width: 600px) {
    width: 100vw;
  }
}
</style>