import axios from "axios";
import { axiosConfig } from "./axiosConfig";

const {
  VUE_APP_DISCORD_OAUTH_CLIENT_ID,
  VUE_APP_DISCORD_OAUTH_SECRET,
  VUE_APP_DISCORD_REDIRECT_URL,
  VUE_APP_TWITTER_OAUTH_CLIENT_ID,
  VUE_APP_TWITTER_REDIRECT_URL,
} = process.env;

export const TWITTER_API_ROUTES = {
  OAUTH2_TOKEN: "https://api.twitter.com/2/oauth2/token",
  OAUTH2_USER: "https://discord.com/api/v8/users/@me",
  OAUTH2_TOKEN_REVOKE: "https://discord.com/api/v8/oauth2/token/revoke",
};

export const DISCORD_API_ROUTES = {
  OAUTH2_TOKEN: "https://discord.com/api/v8/oauth2/token",
  OAUTH2_USER: "https://discord.com/api/v8/users/@me",
  OAUTH2_TOKEN_REVOKE: "https://discord.com/api/v8/oauth2/token/revoke",
};

export const buildOAuth2CredentialsRequest = (code) => ({
  client_id: VUE_APP_DISCORD_OAUTH_CLIENT_ID || "",
  client_secret: VUE_APP_DISCORD_OAUTH_SECRET || "",
  grant_type: "authorization_code",
  redirect_uri: VUE_APP_DISCORD_REDIRECT_URL || "",
  code,
});

export const buildTwitterOAuth2CredentialsRequest = (code) => ({
  code,
  grant_type: "authorization_code",
  client_id: VUE_APP_TWITTER_OAUTH_CLIENT_ID || "",
  redirect_uri: VUE_APP_TWITTER_REDIRECT_URL || "",
  code_verifier: "challenge",
});

export const buildOAuth2RequestPayload = (data) =>
  Object.keys(data)
    .map((key) => key + "=" + data[key])
    .join("&");

export async function exchangeAccessCodeForCredentials(data) {
  const payload = buildOAuth2RequestPayload(data);
  console.log("exchangeAccessCodeFor", payload);
  return axios.post(DISCORD_API_ROUTES.OAUTH2_TOKEN, payload, axiosConfig);
}

export async function twitterAuthToken(data) {
  const payload = buildOAuth2RequestPayload(data);
  console.log("exchangeAccessCodeFor", payload);
  return axios.post(TWITTER_API_ROUTES.OAUTH2_TOKEN, payload, axiosConfig);
}
