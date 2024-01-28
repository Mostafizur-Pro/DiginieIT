import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Welcome to Diginie iT ",
    description: "Diginie it",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`bg-[#0F1110] text-white ${inter.className}`}>
                {children}
            </body>
            <GoogleAnalytics gaId="G-4EBCZDE8QJ" />
        </html>
    );
}
