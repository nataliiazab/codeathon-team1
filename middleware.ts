import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/api/uploadthing",
    "/",
    "/register",
    "/campaigns",
    "/api/donor-registration",
    "/api/campaigns",
  ],

  ignoredRoutes: [
    "/api/campaigns/(.*)",
  ],
});

export const config = {
  // Matcher for routes that need authentication
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", 
    "/api/:path*", 
  ],
};
