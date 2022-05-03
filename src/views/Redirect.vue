<template>
  <h1>Redirecting</h1>
</template>

<script>
import {
  buildOAuth2CredentialsRequest,
  exchangeAccessCodeForCredentials,
  twitterAuthToken,
  buildTwitterOAuth2CredentialsRequest,
} from "../utils/helpers";

export default {
  name: "RedirectView",

  components: {},
  data() {
    return {
      code: "b1IxbExzanktdUhuQTlOSXEyRWdrcHh2LS1zRW1JTlZCNUpHY0FmT2lqUkJrOjE2NTE1MjI4MjU3MzM6MToxOmFjOjE",
    };
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    if (!urlParams.get("state" === "twitter")) {
      this.getTwitterToken(this.code);
    }
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
    async getTwitterToken(code) {
      try {
        const payload = buildTwitterOAuth2CredentialsRequest(code.toString());
        console.log("payloaddddd", payload);
        const { data: credentials } = await twitterAuthToken(payload);
        console.log("twittttterrrr", JSON.stringify(credentials));
      } catch (error) {
        console.log("twitter error", error);
      }
    },
  },
};
</script>
