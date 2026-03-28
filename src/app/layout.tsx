import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuzzRounds — Party Games for Everyone",
  description:
    "A collection of multiplayer party games you can play with friends. Music trivia, general knowledge, and more.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "BuzzRounds",
    description: "Party games for everyone. Play with friends, no app required.",
    url: "https://buzzrounds.com",
    siteName: "BuzzRounds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuzzRounds — Party Games for Everyone",
    description: "Play with friends, no app required.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
