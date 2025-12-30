import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finanzberatung | Deutschland",
  description: "Persönliche Finanzberatung in Deutschland",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}