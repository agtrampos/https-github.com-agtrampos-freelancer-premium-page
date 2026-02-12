export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const appId = import.meta.env.VITE_APP_ID;
  const defaultRedirect = `${window.location.origin}/api/oauth/callback`;
  const redirectUri = import.meta.env.VITE_OAUTH_REDIRECT_URI || defaultRedirect;
  const state = btoa(redirectUri);

  const url = new URL(`/auth/app-auth`, window.location.origin);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
