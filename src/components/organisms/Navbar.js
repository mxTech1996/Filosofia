"use client";

import { navData, dataSite } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="text-2xl font-bold text-primary">
        {dataSite?.iconImage && (
          <Link href="/">
            <Image
              src={dataSite.iconImage}
              alt={dataSite.name}
              width={100}
              height={20}
            />
          </Link>
        )}
      </div>

      <nav className="flex items-center gap-8">
        {navData.map((item, i) => (
          <Link
            href={item?.href}
            className="text-gray-600 hover:text-gray-900"
            key={i}
          >
            {item?.label}
          </Link>
        ))}

        <Link href="/my-cart">
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Go to Cart
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
