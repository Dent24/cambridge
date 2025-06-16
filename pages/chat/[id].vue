<template>
  <v-card class="fill-height d-flex flex-column chat-container elevation-4">
    <v-card-title class="text-h6 font-weight-bold py-2">
      {{ chatInfo.name }}
    </v-card-title>
    <v-divider></v-divider>

    <div ref="messagesContainer" class="messages-area flex-grow-1 overflow-y-auto pa-4">
      <div class="d-flex flex-column justify-end">
        <div v-for="(message, index) in chatInfo.history" :key="index" :class="['message-bubble', message.type]">
          <span class="message-text">{{ message.text }}</span>
          <span class="message-time">{{ dayjs(message.time).format('YYYY/MM/DD HH:mm') }}</span>
        </div>
      </div>
    </div>

    <v-divider></v-divider>
    <v-card-actions class="pa-4">
      <v-text-field
        v-model="newMessage"
        label="輸入訊息..."
        variant="outlined"
        density="compact"
        hide-details
        @keydown.enter="addMessage"
      ></v-text-field>
      <v-btn
        color="primary"
        class="ml-2"
        @click="addMessage"
        :disabled="!newMessage.trim()"
      >
        發送
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

const { $axios } = useNuxtApp()
const route = useRoute()

definePageMeta({
  middleware: ['auth']
})

useHead({
  title: '聊天'
})

const chatInfo = ref({ history: [] })
const newMessage = ref('')
const messagesContainer = ref()

const addMessage = async () => {
  if (newMessage.value.trim()) {
    const rs = await $axios.chat.addChat(newMessage.value.trim())
    if (!!rs) {
      const timeString = dayjs().format('YYYY/MM/DD HH:mm')
      chatInfo.value.history.push({
        text: newMessage.value.trim(),
        type: 'sent',
        time: timeString,
      })
      newMessage.value = ''
      scrollToBottom()
    }
  }
}
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

onBeforeMount(async () => {
  const rs = await $axios.chat.getMemberChat(route.params.id)
  chatInfo.value = rs
})

onMounted(() => {
  scrollToBottom()
})
</script>

<style scoped lang="scss">
.chat-container {
  width: 600px;
  flex-direction: column;
}

.messages-area {
  height: calc(100vh - 48px - 64px - 74px);
}

.message-bubble {
  max-width: 80%;
  padding: 8px 12px;
  border-radius: 18px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
  }
  
  &.sent {
    background-color: #e0e0e0;
    color: #000;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  }
  
  &.received {
    background-color: var(--second-color);
    color: #fff;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
  }

  .message-text {
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  
  .message-time {
    font-size: 0.75rem;
    color: #777;
    align-self: flex-end;
    margin-top: 4px;
  }
}
</style>
