<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :disabled="isDisableRegister"
          class="register-button"
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Click To Register
          <v-icon> mdi-arrow-right-thick </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5"> Register </v-card-title>
        <v-card-text>Successfully Registered</v-card-text>
        >
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "DialogComponent",
  props: ["isDisableRegister"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style scoped>
.register-button {
  margin-bottom: 20px;
  padding: 25px !important;
  width: 50%;
}
</style>
