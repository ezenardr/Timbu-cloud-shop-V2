import type {Metadata} from "next";
import {Roboto_Flex} from "next/font/google";
import "./globals.css";
import React from "react";
import {ViewTransitions} from 'next-view-transitions'
import Header from "@/components/Header";

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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} bg-white max-w-[1440px] mx-auto`}>
      <Header/>
      {children}
      </body>
      </html>
    </ViewTransitions>
  );
}
