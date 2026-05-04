import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Growth Dashboard — Track all startup metrics in one view",
  description: "Aggregates metrics from Google Analytics, Stripe, Mixpanel and more into a single dashboard for startup founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8777c1dc-1f06-47be-9ff8-ee344f9881cc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
