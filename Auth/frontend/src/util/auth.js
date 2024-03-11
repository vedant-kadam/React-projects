import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const exp = localStorage.getItem("exp");
  const expDate = new Date(exp);
  const now = new Date();
  const duration = expDate.getTime() - now.getTime();
  return duration;
}
export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}
export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    redirect("/auth");
  }
  return null;
}
