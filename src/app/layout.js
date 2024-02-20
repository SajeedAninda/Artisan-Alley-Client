import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/Authentication/AuthProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artisan Alley",
  description: "A website which links users to unique handmade products from local artisans",
};

const queryClient = new QueryClient()


export default function RootLayout({ children }) {
  return (
    // <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
            <Toaster />
            <Header></Header>
            {children}
            <Footer></Footer>
          </AuthProvider>
        </body>
      </html>
    // </QueryClientProvider>
  );
}
