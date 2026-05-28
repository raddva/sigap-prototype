import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIGAP Admin — Government Portal",
  description: "SIGAP government portal for citizen verification, AI insights, and social assistance monitoring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}