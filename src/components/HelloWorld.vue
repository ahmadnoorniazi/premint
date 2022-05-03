<template>
  <v-container class="container-main" fluid>
    <div>
      <v-img
        lazy-src="https://s3.us-west-1.amazonaws.com/redwood-labs/premint/uploads/images/ca70bd6f612f4ccbb1c0d5600312047d.png"
        max-height="250"
        min-width="100%"
        src="https://s3.us-west-1.amazonaws.com/redwood-labs/premint/uploads/images/ca70bd6f612f4ccbb1c0d5600312047d.png"
      ></v-img>
    </div>
    <div class="thumb-main">
      <div class="wrapper-thumb">
        <v-img
          lazy-src="https://s3.us-west-1.amazonaws.com/redwood-labs/premint/uploads/images/0fe8a4c4e4674d2cab9677e3d07b5130.png"
          src="https://s3.us-west-1.amazonaws.com/redwood-labs/premint/uploads/images/0fe8a4c4e4674d2cab9677e3d07b5130.png"
          class="image-thumb"
        ></v-img>
      </div>
    </div>
    <RegisterCard
      :discordLink="link"
      :onRevokeDiscord="onRevokeDiscord"
      :discordData="discordData"
      :openTwitter="signInWithTwitter"
      :twitterData="twitterData"
      :onRevokeTwitter="onRevokeTwitter"
    />
  </v-container>
</template>

<script>
import RegisterCard from "./RegisterCard.vue";
import { authentication } from "../firebase";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";

export default {
  name: "HelloWorld",

  components: {
    RegisterCard,
  },

  mounted() {
    let data = JSON.parse(window.localStorage.getItem("discordUser"));
    let twitterData = JSON.parse(window.localStorage.getItem("twitterData"));
    this.twitterData = twitterData ? twitterData : null;
    this.discordData = data ? data : {};
  },

  data: () => ({
    link: "https://discord.com/api/oauth2/authorize?client_id=970534833753292871&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fredirect&response_type=code&scope=identify%20guilds",
    twitterLink:
      "https://twitter.com/i/oauth2/authorize?response_type=code&client_id=bXhNTGkxVnIwYTRlSnFiS3plYTA6MTpjaQ&redirect_uri=https://main--effulgent-souffle-d42e2d.netlify.app/redirect&scope=tweet.read%20users.read%20follows.read%20follows.write&state=twitter&code_challenge=challenge&code_challenge_method=plain",
    discordData: JSON.parse(window.localStorage.getItem("discordUser")) || {},
    twitterData: JSON.parse(window.localStorage.getItem("twitterData")) || null,
  }),
  computed: {},
  methods: {
    onRevokeDiscord() {
      window.localStorage.setItem("discordUser", null);
      let data = JSON.parse(window.localStorage.getItem("discordUser"));
      this.discordData = data ? data : {};
    },
    signInWithTwitter() {
      const provider = new TwitterAuthProvider();
      signInWithPopup(authentication, provider)
        .then((res) => {
          window.localStorage.setItem("twitterData", JSON.stringify(res?.user));
          this.twitterData = res.user;
        })
        .catch((err) => console.log("auth errrorrr", err));
    },
    onRevokeTwitter() {
      window.localStorage.setItem("twitterData", null);
      this.twitterData = null;
    },
  },
};
</script>
<style scoped>
.container-main {
  padding: 0 !important;
}
.image-thumb {
  border-radius: 100%;
  margin-top: 30px;
  border: 8px solid rgba(0, 0, 0, 0.1);
  max-width: 100%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff !important;
  border-color: #fff !important;
}
.wrapper-thumb {
  margin: 0 auto;
  width: 140px;
  position: relative;
  display: inline-block !important;
}
.thumb-main {
  width: 100%;
  margin-left: 28%;
  margin-top: -104px;
}
</style>
