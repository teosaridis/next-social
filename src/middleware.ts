import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const composeMiddlewares = (middlewares: {
  [key: string]: (req: NextRequest) => NextResponse | Promise<NextResponse>;
}) => {
  return (req: NextRequest) => {
    const parsedMiddlewares = Object.entries(middlewares);
    const initialResponse = Promise.resolve(NextResponse.next());

    return parsedMiddlewares.reduce(
      (prevPromise, [middlewareName, middleware]) => {
        return prevPromise.then((res) => {
          if (res?.status >= 300 && res?.status < 400) {
            console.debug(`[middleware][skip][redirect] - ${middlewareName}`);
            return res;
          } else {
            console.debug(`[middleware] - ${middlewareName}`);
            return middleware(req);
          }
        });
      },
      initialResponse
    );
  };
};

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

const isProtectedRoute = createRouteMatcher(["/settings(.*)"]);

export default composeMiddlewares({
  nextintl: createMiddleware(routing),
  clerk: clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  }),
});
