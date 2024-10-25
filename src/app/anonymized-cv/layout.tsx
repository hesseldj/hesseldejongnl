import type { Metadata } from "next";
import { Lato, Dosis } from 'next/font/google';
import "../globals.css";



const lato = Lato({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    variable: '--font-lato',
});

const dosis = Dosis({
    weight: ['600', '700'],
    subsets: ['latin'],
    variable: '--font-dosis',
});

export const metadata: Metadata = {
    title: "Curriculum Vitae van H J",
    description: "Ervaren designer en full stack developer, gespecialiseerd in gebruiksvriendelijke interfaces en gestructureerde code met focus op procesoptimalisatie.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl">
        <body className={`${dosis.variable} ${lato.variable} font-sans`}>
        {children}
        </body>
        </html>
    );
}
