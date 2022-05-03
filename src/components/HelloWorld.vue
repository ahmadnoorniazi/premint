<template>
  <v-container>
    <a :href="link" target="_blank">Discord Login</a>
    <p>
      <router-link to="/redirect?code=abcdsf">Redirect to</router-link>
    </p>
    <RegisterCard
      :discordLink="link"
      :onRevokeDiscord="onRevokeDiscord"
      :discordData="discordData"
      :twitterLink="twitterLink"
    />
  </v-container>
</template>

<script>
import RegisterCard from "./RegisterCard.vue";

export default {
  name: "HelloWorld",

  components: {
    RegisterCard,
  },

  mounted() {
    let data = JSON.parse(window.localStorage.getItem("discordUser"));
    this.discordData = data ? data : {};
  },

  data: () => ({
    link: "https://discord.com/api/oauth2/authorize?client_id=970534833753292871&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fredirect&response_type=code&scope=identify%20guilds",
    twitterLink:
      "https://twitter.com/i/oauth2/authorize?response_type=code&client_id=bXhNTGkxVnIwYTRlSnFiS3plYTA6MTpjaQ&redirect_uri=https://6270af22157aed6f8a4cf493--effulgent-souffle-d42e2d.netlify.app&scope=tweet.read%20users.read%20follows.read%20follows.write&state=twitter&code_challenge=challenge&code_challenge_method=plain",
    discordData: JSON.parse(window.localStorage.getItem("discordUser")) || {},
  }),
  computed: {},
  methods: {
    onRevokeDiscord() {
      window.localStorage.clear();
      let data = JSON.parse(window.localStorage.getItem("discordUser"));
      this.discordData = data ? data : {};
    },
  },
};
</script>
