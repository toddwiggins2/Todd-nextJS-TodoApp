import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { text } from 'stream/consumers'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Todd CRUD Todo App",
  description: "nextJS CRUD Todo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-slate-800 dark:text-gray-100 flex justify-center">
        {children}
      </body>
    </html>
  );
}
