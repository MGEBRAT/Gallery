import type { Metadata } from "next";
import { Inter, Literata } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



const inter = Inter({ 
  subsets: ["cyrillic"],
  weight: ['300', '400', '500', '700'],
  variable: "--font-inter"
});

const literata = Literata({
  subsets: ['cyrillic'],
  weight: ['500', '600', '700'],
  variable: "--font-literata"
})

export const metadata: Metadata = {
  title: "MyGallery",
  description: "Выставка картин",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${literata.variable} w-full  text-white`}>
        <div className="__next">
          <Header />
          <main className="main w-full" id="main">
            <div className="w-full" id="mainPage">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}