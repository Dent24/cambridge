<template>
  <div class="user-block position-relative">
    <img v-if="!imageError" :src="props.item.image" class="user-image" @error="imageOnError" />
    <div class="user-info position-absolute">
      <p>{{ props.item.name }}</p>
      <p>{{ props.item.height }}cm / {{ props.item.weight }}kg / {{ props.item.age }}歲</p>
    </div>

    <div class="corner-indicator" :class="tipsColor" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object
  }
})

const imageError = ref(false)

const tipsColor = computed(() => {
  switch (true) {
    case (!!props.item.match):
      return 'match'
    case (props.item.like == 1):
      return 'not-like'
    case (props.item.like == 2):
      return 'uncertain'
    case (props.item.like == 3):
      return 'like'
    default:
      return ''
  }
})

const imageOnError = (e: any) => {
  imageError.value = true
}
</script>

<style scoped lang="scss">
.user-block {
  height: 200px;
  background: #ccc;

  .user-image {
    width: 100%;
  }

  .user-info {
    color: #fff;
    left: 8px;
    bottom: 8px;
    font-size: 14px;
  }

  .corner-indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    z-index: 100;

    &.match {
      background: #ff2020;
    }

    &.not-like {
      background: #2168ff;
    }

    &.uncertain {
      background: #41b314;
    }

    &.like {
      background: #ff9c06;
    }
  }
}
</style>