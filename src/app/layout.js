import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GeMAR - Gerakan Menanam Anti Rugi",
  description: "Program Ketahanan Pangan New Generation untuk Petani Milenial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
