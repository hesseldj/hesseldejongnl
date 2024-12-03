import type { Metadata } from "next";
import { BaseLayout } from "@/components/layouts/BaseLayout";

export const metadata: Metadata = {
    title: "Curriculum Vitae van H J",
    description: "Ervaren designer en full stack developer, gespecialiseerd in gebruiksvriendelijke interfaces en gestructureerde code met focus op procesoptimalisatie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}
