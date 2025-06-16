<template>
  <div class="main-area">
    <div v-if="!isAllDone" class="now-card d-flex justify-center overflow-hidden position-relative">
      <img v-if="!imageError" :src="nowMatch.image" class="now-image" @error="imageOnError" />
      <div class="simple-info position-absolute bottom-0 left-0 right-0">
        <h1>{{ nowMatch.name }}</h1>
        <div class="d-flex justify-space-between align-end text-white">
          <div>
            {{ nowMatch.height }}cm / {{ nowMatch.weight }}kg / {{ nowMatch.age }}歲
          </div>
          <div>{{ transToKm(nowMatch.distance) }}km</div>
        </div>
        <v-row class="my-2">
          <v-col cols="4">
            <div class="like-btn cursor-pointer" @click="changeLike(1)">
              <v-icon color="#2168ff" icon="mdi-heart-off" size="large" />
              <p>不喜歡</p>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="like-btn cursor-pointer" @click="changeLike(2)">
              <v-icon color="#41b314" icon="mdi-heart-half-full" size="large" />
              <p>不確定</p>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="like-btn cursor-pointer" @click="changeLike(3)">
              <v-icon color="#ff9c06" icon="mdi-heart" size="large" />
              <p>有興趣</p>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else class="now-card d-flex justify-center align-center">
      <h1 class="text-white">今日無配對</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'

const { $axios } = useNuxtApp()

definePageMeta({
  middleware: ['auth']
})

const matchList = ref([])
const nowMatch = ref({})
const imageError = ref(false)

const isAllDone = computed(() => {
  return !matchList.value.length
})

const transToKm = (dist: number) => {
  return dist / 1000
}
const changeLike = async (value: number) => {
  const rs = await $axios.user.setMemberLike(value)
  if (!!rs) {
    matchList.value = _.drop(matchList.value, 1)
    nowMatch.value = matchList.value[0]
    imageError.value = false
  }
}
const imageOnError = () => {
  imageError.value = true
}

onBeforeMount(async () => {
  const rs = await $axios.user.getMatchList()
  matchList.value = rs
  nowMatch.value = rs[0]
})
</script>

<style scoped lang="scss">
.main-area {
  width: 600px;

  @media screen and (max-width: 600px) {
    width: 100vw;
    flex-grow: 1;
  }

  .now-card {
    margin-top: 24px;
    height: 800px;
    background: #ccc;
    border-radius: 24px;
    overflow: hidden;

    @media screen and (max-width: 600px) {
      margin-top: 0;
      height: calc(100vh - 64px);
      border-radius: 0;
    }

    .now-image {
      height: 100%;

      @media screen and (max-width: 600px) {
        width: 100vw;
        height: 100%;
      }
    }

    .simple-info {
      width: 100%;
      padding: 18px 24px;
      background: #0003;

      h1 {
        color: var(--main-color);
      }

      .like-btn {
        padding: 8px 0;
        border-radius: 8px;
        text-align: center;
        background: #eee9;
      }
    }
  }
}
</style>