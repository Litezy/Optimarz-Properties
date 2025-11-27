// utils/cookies.ts
import Cookies from "js-cookie";

// Cookie names
export const ADMIN_AUTH_COOKIE = "admin_auth";
export const ADMIN_PROFILE_COOKIE = "admin_profile";

// -----------------------------
// Cookie Options Interface
// -----------------------------
interface CookieOptions {
  expires?: number; // Days until expiration
  path?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

// -----------------------------
// Set Cookie
// -----------------------------
export const setCookie = (
  name: string,
  value: string,
  options: CookieOptions = {}
) => {
  const {
    expires = 7, // Default 7 days
    path = "/",
    secure = false,
    sameSite = "lax",
  } = options;

  Cookies.set(name, value, {
    expires,
    path,
    secure,
    sameSite,
  });
};

// -----------------------------
// Get Cookie
// -----------------------------
export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

// -----------------------------
// Delete Cookie
// -----------------------------
export const deleteCookie = (name: string) => {
  Cookies.remove(name, { path: "/" });
};

// -----------------------------
// Get All Cookies
// -----------------------------
export const getAllCookies = () => {
  return Cookies.get();
};