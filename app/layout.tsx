
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Sinai Pedras",
  description: "Descrição do site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import { SpeedInsights } from '@vercel/speed-insights/next';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}