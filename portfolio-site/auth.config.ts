import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isCaseStudy = nextUrl.pathname.startsWith('/case-studies');
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      if (isCaseStudy) {
        if (isLoggedIn) {
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isOnLogin && isLoggedIn) {
        return Response.redirect(new URL('/case-studies', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;