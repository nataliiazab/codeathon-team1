import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/api/uploadthing",
    "/",
    "/register",
    "/campaigns",
    "/api/donor-registration",
    "/api/campaigns",
    "/api/campaigns/:id", 
    "/campaigns/:id",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/api/:path*"],
};
