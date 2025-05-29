import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ST. GEORGE HOREB JACOBITE SYRIAN CHURCH, VADAKKUMBHAGAM",
    description:
        "Welcome to ST. GEORGE HOREB JACOBITE SYRIAN CHURCH, VADAKKUMBHAGAM. Join us for worship, fellowship, and spiritual growth in our vibrant community.",
    keywords:
        "church, Jacobite Syrian Church, St. George, Vadakkumbhagam, worship, community, faith",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
