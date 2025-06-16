<template>
  <div class="main-area">
    <v-carousel height="800px" hide-delimiters>
      <v-carousel-item v-for="image in info.images" :src="image" cover />
    </v-carousel>
    <div class="info-block">
      <div class="d-flex justify-space-between align-center">
        <h1>{{ info.name }}</h1>
        <div class="d-flex justify-end">
          <div class="cursor-pointer" @click="showLikeBtn = !showLikeBtn">
            <v-icon v-if="info.like == 1" color="#2168ff" icon="mdi-heart-off" size="large" />
            <v-icon v-else-if="info.like == 2" color="#41b314" icon="mdi-heart-half-full" size="large" />
            <v-icon v-else-if="info.like == 3" color="#ff9c06" icon="mdi-heart" size="large" />
            <v-icon v-else-if="info.match" color="#ff2020" icon="mdi-heart-multiple" size="large" />
            <v-icon v-else color="grey-darken-1" icon="mdi-heart-outline" size="large" />
          </div>
          <v-icon class="ml-3 cursor-pointer" color="grey-darken-1" icon="mdi-card-multiple-outline" size="large" />
        </div>
      </div>
      <v-row class="my-2" v-if="showLikeBtn">
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
      <div class="d-flex justify-space-between align-end">
        <div>
          {{ info.height }}cm / {{ info.weight }}kg / {{ info.age }}歲
        </div>
        <div>{{ transToKm(info.distance) }}km</div>
      </div>
      <h3 class="mt-2">自我介紹</h3>
      <p class="mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium saepe tempore illum nesciunt minus quod ipsam nulla? Possimus cum, dolores illum et deserunt laboriosam placeat velit, architecto soluta, nobis voluptatem.</p>
    </div>

    <v-snackbar v-model="snackbar" :timeout="2000" location="top" color="success">儲存成功</v-snackbar>
  </div>
</template>

<script setup lang="ts">
const { $axios } = useNuxtApp()
const route = useRoute()

useHead({
  title: '個人檔案'
})

const info = ref({})
const showLikeBtn = ref(false)
const snackbar = ref(false)

const transToKm = (dist: number) => {
  return dist / 1000
}
const changeLike = async (value: number) => {
  const rs = await $axios.user.setMemberLike(value)
  if (!!rs) {
    snackbar.value = true
    showLikeBtn.value = false
  }
}

onBeforeMount(async () => {
  const rs = await $axios.user.getMemberInfo(route.params.id)
  info.value = rs
})
</script>

<style scoped lang="scss">
.main-area {
  width: 600px;
  background: #fff;
}

.info-block {
  padding: 8px;

  h1 {
    color: var(--main-color);
  }

  .like-btn {
    padding: 8px 0;
    border-radius: 8px;
    text-align: center;
    background: #eee;
  }
}

</style>