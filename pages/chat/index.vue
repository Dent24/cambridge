<template>
  <div class="main-area">
    <v-list class="chat-list">
      <ChatListItem v-for="item in chatList" :item="item" />
    </v-list>
  </div>
</template>

<script setup lang="ts">
const { $axios } = useNuxtApp()

definePageMeta({
  middleware: ['auth']
})

useHead({
  title: '聊天列表'
})

const chatList = ref([])

onBeforeMount(async () => {
  const rs = await $axios.chat.getList()
  chatList.value = rs
})
</script>

<style scoped lang="scss">
.main-area {
  width: 600px;
  height: 100%;
  background: #fff;

  .chat-list {
    padding: 0;
  }
}
</style>