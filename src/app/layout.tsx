import type {Metadata} from "next";
import {Roboto_Flex} from "next/font/google";
import "./globals.css";
import React from "react";
import Layout from "@/components/ui/Layout";

const roboto = Roboto_Flex({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Timbu Cloud Shop",
  description: "Shop now for unbeatable comfort, top-notch designs, and top-tier performance from your favorite brands.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${roboto.className} bg-white max-w-[1440px] mx-auto`}>
    <Layout>{children}</Layout></body>
    </html>
  );
}
