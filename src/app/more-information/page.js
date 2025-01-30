"use client";
import React from "react";
import { ContactInfo } from "ecommerce-mxtech";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

export default function MoreInformation() {
  return (
    <main className="relative">
      <Navbar />

      <div className="bg-blue-200">
        <ContactInfo />
      </div>

      <Footer />
    </main>
  );
}
