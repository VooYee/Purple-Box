import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purple Box",
  description: "Unlock the power of AI with Purple-Box, the multichannel chatbot designed for e-commerce growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-agrandir antialiased'>
        {children}
      </body>
    </html>
  );
}
