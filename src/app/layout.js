import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/Authentication/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artisan Alley",
  description: "A website which links users to unique handmade products from local artisans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Toaster />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
