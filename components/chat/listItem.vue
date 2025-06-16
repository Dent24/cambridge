<template>
  <v-list-item class="user-item" @click="toChat">
    <template v-slot:prepend>
      <img v-if="!imageError" :src="props.item.image" class="user-image" @error="imageOnError" />
      <div v-else class="user-image" />
    </template>
    <div class="chat-info d-flex align-center justify-space-between pr-4">
      <div class="font-weight-bold" :class="props.item.notRead || 'text-grey'">{{ props.item.name }}</div>
      <div class="text-grey">{{ dayjs(props.item.lastTime).format('YYYY/MM/DD HH:mm') }}</div>
    </div>
    <div class="chat-info d-flex align-center justify-space-between pr-4 mt-2">
      <div :class="props.item.notRead || 'text-grey'">
        <v-icon v-if="props.item.lastFromSelf" color="grey" icon="mdi-share" />
        {{ props.item.lastMessage }}
      </div>
      <div v-if="props.item.notRead" class="not-read-count text-white bg-red">{{ props.item.notRead }}</div>
    </div>
  </v-list-item>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

const router = useRouter()

const props = defineProps({
  item: Object
})

const imageError = ref(false)

const toChat = () => {
  router.push('/chat/1')
}
const imageOnError = () => {
  imageError.value = true
}
</script>

<style scoped lang="scss">
.user-item {
  padding: 0;
  padding-inline: 0 !important;
  border-bottom: 1px solid #000;

  ::v-deep(.v-list-item__prepend) {
    padding: 10px;
  }

  .user-image {
    width: 150px;
    height: 150px;
    background: #ccc;
    border-radius: 8px;
  }

  .not-read-count {
    padding: 2px 10px;
    border-radius: 50%;
  }
}
</style>