<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center logo-image">
        <v-img
          alt="Premint Logo"
          src="https://redwood-labs.s3.amazonaws.com/premint/static/identity/images/wordmark.svg"
          width="100"
        />
      </div>

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
