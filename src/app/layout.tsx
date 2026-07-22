import type { Metadata } from "next";
import { DM_Serif_Display, IBM_Plex_Sans } from "next/font/google";
import { SessionProvider } from "@/components/auth/SessionProvider";
import { auth } from "@/lib/auth";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-brand-sans",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Gilead Sciences Reputation",
  description:
    "Glassdoor & Indeed employer brand audit, ratings, and review reply drafts for Gilead Sciences.",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-brand-paper font-sans text-brand-ink">
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
