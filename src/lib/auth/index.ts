import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { findUserById, verifyUserPassword } from "./users";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Email and password",
      credentials: {
        login: { label: "Email or username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const login =
          typeof credentials?.login === "string" ? credentials.login : "";
        const password =
          typeof credentials?.password === "string"
            ? credentials.password
            : "";

        if (!login || !password) return null;

        const user = await verifyUserPassword(login, password);
        if (!user) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async session(params) {
      const baseSession = authConfig.callbacks.session(params);

      if (baseSession.user && params.token.sub) {
        const stored = await findUserById(params.token.sub);
        if (stored) {
          baseSession.user.id = stored.id;
          baseSession.user.role = stored.role ?? "user";
          baseSession.user.name = stored.name;
          baseSession.user.email = stored.email;
        }
      }

      return baseSession;
    },
    async jwt({ token, user, trigger, session }) {
      if (user?.id) {
        const stored = await findUserById(user.id);

        return {
          sub: user.id,
          name: stored?.name ?? user.name ?? undefined,
          email: stored?.email ?? user.email ?? undefined,
          role: stored?.role ?? user.role ?? "user",
          picture: user.image ?? undefined,
          iat: Math.floor(Date.now() / 1000),
        };
      }

      if (token.sub) {
        const stored = await findUserById(token.sub);
        if (stored) {
          token.role = stored.role ?? "user";
          token.name = stored.name;
          token.email = stored.email;
        }
      }

      if (trigger === "update" && session) {
        if (typeof session.name === "string") token.name = session.name;
        if (typeof session.email === "string") token.email = session.email;
      }

      return token;
    },
  },
});
