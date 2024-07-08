import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import Footer from "@/components/Footer";
import QueryClientComponent from "@/components/QueryClientProvider";
import { Toaster } from "react-hot-toast";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Page ",
  description: "The marketplace for all your fashion needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font- antialiased ", nunito.className)}
      >
        <main className=" relative flex flex-col min-h-screen">
          <Toaster />
          <QueryClientComponent>
            <MaxWidthWrapper className="sticky top-0 z-50 ">
              <Navbar />
            </MaxWidthWrapper>
            <div className="flex-grow flex-1 min-h-[80vh]">{children}</div>

            <Footer />
          </QueryClientComponent>
        </main>
      </body>
    </html>
  );
}
