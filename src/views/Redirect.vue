<template>
  <h1>Redirecting</h1>
</template>

<script>
import {
  buildOAuth2CredentialsRequest,
  exchangeAccessCodeForCredentials,
} from "../utils/helpers";

export default {
  name: "RedirectView",

  components: {},
  data() {
    return {};
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    this.getUserData(code);
  },
  methods: {
    async getUserData(code) {
      if (code) {
        try {
          const payload = buildOAuth2CredentialsRequest(code.toString());
          console.log("payloaddddd", payload);
          const { data: credentials } = await exchangeAccessCodeForCredentials(
            payload
          );
          window.localStorage.setItem(
            "discordUser",
            JSON.stringify(credentials)
          );
          this.$router.push("/");
        } catch (err) {
          console.log(err);
          //   res.sendStatus(400);
        }
      }
    },
  },
};
</script>
