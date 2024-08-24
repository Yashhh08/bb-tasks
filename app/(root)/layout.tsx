// import Footer from "@/components/shared/Footer";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Bombay Blokes - Tasks",
  description: "",
  icons: {
    icon: "./assets/images/bulb-icon.png",
  },
  openGraph: {
    title: "Bombay Blokes - Tasks",
    description: "",
    images: [{ url: "./assets/images/bulb-icon.png" }],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
