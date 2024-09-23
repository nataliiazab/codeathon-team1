import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/api/uploadthing",
    "/",
    "/register",
    /^\/campaigns\/.*/,
    "/api/donor-registration",
    "/api/campaigns", 
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
