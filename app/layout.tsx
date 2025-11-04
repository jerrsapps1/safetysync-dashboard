import "./globals.css";
export const metadata = { title: "SafetySync Dashboard" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#0d1117", color: "#c9d1d9" }}>{children}</body>
    </html>
  );
}
