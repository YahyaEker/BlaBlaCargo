'use client';
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import ImageSection from "@/components/imageSection";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Görünmemesi gereken sayfalar
  const hiddenPaths = ["/login"]; // Login ve Register sayfalarında gizle

  const shouldHideLayout = hiddenPaths.includes(pathname);

  return (
    <html lang="en">
      <body>
        {!shouldHideLayout && <Header />}
        <main className="content">{children}</main>
        <div className="sago"><Footer /></div>

      </body>
    </html>
  );
}
