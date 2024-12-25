// import localFont from "next/font/local";
// import NavBar from "@/components/navbar";
// import Footer from "@/components/footer";
import type { Metadata } from "next";
import "./globals.css";

/* const font = localFont({
  src: "",
  variable: "",
  weight: "",
}); */

export const metadata: Metadata = {
  title: "Auth-Example",
  description: "...",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
