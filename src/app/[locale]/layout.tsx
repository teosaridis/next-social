import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teos Social Media App",
  description: "Social media app built with Next.js and a lot Love ♥",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <ClerkProvider>
      <html>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <div className="w-full bg-white px-4">
              <Navbar />
            </div>
            <div className="bg-slate-100 px-4 min-h-screen">{children}</div>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
