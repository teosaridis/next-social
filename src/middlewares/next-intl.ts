import createMiddleware from "next-intl/middleware";
import { routing } from "../i18n/routing";


export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/prisma`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!prisma|_next|_vercel|.*\\..*).*)",

    "/",
    "/(en|gr)/:path*",
  ],
};

export default createMiddleware(routing);