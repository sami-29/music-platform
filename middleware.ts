import { locales } from "./i18n/locales";
import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

const matcherRegex = new RegExp(
  `^/(${locales.join("|")})?/?(?!api|_next|.*\\..*).*`
);

// Define basic public routes
const publicRoutesBase = [
  "/",
  "/sign-in",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/explore",
];

// Generate localized routes based on base public routes
const localizedPublicRoutes = locales.flatMap((locale) => {
  return publicRoutesBase.map((route) => `/${locale}${route}`);
});

// Combine both base and localized public routes
const allPublicRoutes = [
  "/",
  new RegExp(`^/(${locales.join("|")})/?$`),
  "/:locale/sign-in",
  "/sign-in",
  ...publicRoutesBase,
  ...localizedPublicRoutes,
];

export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },

  publicRoutes: allPublicRoutes,
});

export const config = {
  matcher: [matcherRegex],
};
