<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>My APP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/home">首頁</v-btn>
      <v-btn text to="/login">我的檔案</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height d-flex align-center justify-center">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
::v-deep(.v-toolbar__content) {
  background-color: var(--main-color);
}
</style>