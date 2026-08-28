import type { Metadata } from "next";
import "./globals.css";

const assetPrefix = process.env.GITHUB_ACTIONS === "true" ? "/Rewards4passion" : "";

export const metadata: Metadata = {
  title: {
    default: "Rewards4Passion Nigeria Ltd",
    template: "%s | Rewards4Passion Nigeria Ltd",
  },
  description:
    "Procurement, escrow support, shipping and consignment, outsourcing, and business consultation in Nigeria.",
  icons: {
    icon: `${assetPrefix}/favicon.svg`,
    shortcut: `${assetPrefix}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
