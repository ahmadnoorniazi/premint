<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center logo-image">App Name</div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.logo-image {
  margin-left: 27%;
}
</style>
