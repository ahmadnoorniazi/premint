<template>
  <div>
    <v-card class="mx-auto" max-width="800">
      <v-card-text class="card-text">
        <h1 class="main-heading">Register</h1>
        <p class="sub-text">
          Follow the steps below to add yourself to this list.
        </p>
        <div class="description-text">
          <strong class="strong-ele">Requirements.</strong> To register, you
          must:
        </div>
        <div class="spacer" />
        <ul class="list">
          <li class="list-item">
            <v-icon> mdi-ethereum </v-icon>
            Have at least
            <span class="span-bold">0.12 ETH</span>
            in your wallet
          </li>
          <li class="list-item">
            <v-icon class="icon-color"> mdi-twitter </v-icon>
            Follow
            <a
              class="twitter-link"
              href="https://twitter.com/allseeinglemon"
              target="_blank"
              >@allseeinglemon</a
            >
            on Twitter
          </li>
          <li class="list-item">
            <v-icon class="discord-icon-color"> mdi-discord </v-icon>
            Join the
            <a
              href="https://discord.gg/UKrhGketaN"
              class="twitter-link"
              target="_blank"
              >The All Seeing Lemon</a
            >
            Discord
          </li>
        </ul>
        <div class="sources-list">
          <div class="sources-list-item">
            <h2>Connect to Twitter</h2>
            <div>
              <v-btn
                @click="openTwitter"
                class="connect-button"
                rounded
                color="primary"
                :disabled="
                  twitterData && twitterData.stsTokenManager.accessToken
                    ? true
                    : false
                "
              >
                {{
                  twitterData && twitterData.stsTokenManager.accessToken
                    ? "Connected"
                    : "Connect"
                }}
              </v-btn>
              <v-btn
                v-if="twitterData && twitterData.stsTokenManager.accessToken"
                rounded
                color="primary"
                @click="onRevokeTwitter"
              >
                Revoke
              </v-btn>
            </div>
          </div>
          <div class="sources-list-item-1">
            <h2>Connect to Discord</h2>
            <div>
              <v-btn
                :href="discordLink"
                rounded
                :color="discordData.access_token ? 'green' : 'primary'"
                :disabled="discordData.access_token ? true : false"
                class="connect-button"
              >
                {{ discordData.access_token ? "Connected" : "Connect" }}
              </v-btn>

              <v-btn
                v-if="discordData.access_token"
                rounded
                color="primary"
                @click="onRevokeDiscord"
              >
                Revoke
              </v-btn>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-actions class="action-class">
        <DailogMenu :isDisableRegister="isDisableRegister" />
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import DailogMenu from "./DialogComponent.vue";

export default {
  name: "RegisterCard",
  components: {
    DailogMenu,
  },
  props: [
    "discordLink",
    "onRevokeDiscord",
    "discordData",
    "openTwitter",
    "twitterData",
    "onRevokeTwitter",
  ],
  mounted() {
    console.log("mounteddd with prop", this.twitterData);
  },
  data() {
    return {
      dialog_: false,
    };
  },
  computed: {
    isDisableRegister() {
      let disabled = false;
      if (
        this.discordData.access_token &&
        this.twitterData?.stsTokenManager?.accessToken
      ) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    },
  },
  methods: {
    onRegister() {
      this.dialog_ = !this.dialog_;
    },
  },
  watch: {
    discordData() {
      console.log("The colour has changed!");
    },
  },
};
</script>
<style scoped>
.main-heading {
  margin-bottom: 0.5rem !important;
  font-weight: 600;
  font-size: 1.5rem !important;
  font-family: "Inter", sans-serif !important;
  color: #111;
  padding: 0px 20px;
}

.sub-text {
  opacity: 0.6;
  color: #55595c;
  line-height: 1.5;
  font-size: 1rem;
  padding: 0px 20px;
}

.strong-ele {
  color: #2cbbdb !important;
  font-weight: 600;
  text-transform: uppercase !important;
}

.description-text {
  text-transform: uppercase !important;
  font-size: 0.75rem !important;
  background-color: #f8f9fa !important;
  padding: 10px 20px;
  width: 100% !important;
}

.card-text {
  padding: 0px !important;
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
.spacer {
  padding: 10px 20px;
}

.icon-color {
  color: #5ac8fa !important;
}

.discord-icon-color {
  color: #5856d6 !important;
}

.list {
  padding-left: 0;
  padding: 0px 20px;
}

.list-item {
  list-style-type: none;
  padding: 7px 0px;
  color: black;
}

.span-bold {
  color: #000 !important;
  font-weight: bold !important;
}

.twitter-link {
  color: #2cbbdb !important;
  font-weight: 700 !important;
  font-size: 16px !important;
}

.sources-list {
  border-color: #f1f1f1 !important;
  border-bottom: 1px solid #dee2e6 !important;
  border-top: 1px solid #dee2e6 !important;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
}
.sources-list-item {
  display: flex;
  justify-content: space-between !important;
  margin-bottom: 20px;
}
.sources-list-item-1 {
  display: flex;
  justify-content: space-between !important;
}
.connect-button {
  margin-right: 15px;
}
.register-button {
  padding: 25px !important;
  width: 50%;
}
.action-class {
  justify-content: center;
}
</style>
