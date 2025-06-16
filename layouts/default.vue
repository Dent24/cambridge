<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>My APP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/home">
        <v-icon color="white" icon="mdi-home" size="large" />
      </v-btn>
      <v-btn text to="/match">
        <v-icon color="white" icon="mdi-cards" size="large" />
      </v-btn>
      <v-btn text to="/chat">
        <v-icon color="white" icon="mdi-forum-outline" size="large" />
      </v-btn>
      <v-btn text @click="logout">
        <v-icon color="white" icon="mdi-logout" size="large" />
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height justify-center align-start">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.setUserInfo({})
  router.push('/login')
}
</script>

<style scoped lang="scss">
::v-deep(.v-toolbar__content) {
  background-color: var(--main-color);
}

::v-deep(.v-container) {
  padding: 0;
}
</style>