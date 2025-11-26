// Default cookie name
export const CookieName = "Optimarz011";

// -----------------------------
// Helpers
// -----------------------------
interface CookieOptions {
  days?: number;
  path?: string;
  secure?: boolean; // more modern
  sameSite?: "Lax" | "Strict" | "None";
}

// Generate expiration string
const getExpiry = (days: number): string => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  return date.toUTCString();
};

// -----------------------------
// Set Cookie
// -----------------------------
export const setCookie = (
  value: string,
  name: string = CookieName,
  options: CookieOptions = {}
) => {
  const {
    days = 7,
    path = "/",
    secure = false,
    sameSite = "Lax",
  } = options;

  const expires = getExpiry(days);
  const secureFlag = secure ? ";secure" : "";

  document.cookie = `${name}=${encodeURIComponent(
    value
  )};expires=${expires};path=${path};SameSite=${sameSite}${secureFlag}`;
};

// -----------------------------
// Get Cookie
// -----------------------------
export const getCookie = (name: string = CookieName): string | null => {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [key, val] = cookie.split("=");

    if (key === name) {
      return decodeURIComponent(val);
    }
  }

  return null;
};

// -----------------------------
// Delete Cookie
// -----------------------------
export const deleteCookie = (name: string = CookieName) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax`;
};

// -----------------------------
// Additional cookie names
// -----------------------------
export const ADMIN_AUTH_COOKIE = "admin_auth";
export const ADMIN_PROFILE_COOKIE = "admin_profile";
