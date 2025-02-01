"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { footerData, dataSite } from "@/data";
import { Footer as FooterComponent } from "ecommerce-mxtech";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-white mt-10">
      <div className="container mx-auto grid grid-cols-4 gap-10">
        <div className="w-full">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">{dataSite.name}</h3>
            <div className="flex space-x-8">
              {footerData.map((item, i) => (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-primary"
                  key={i}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Address</h3>
          <p className="text-gray-600">{dataSite.address}</p>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Email Address</h3>
          <p className="text-gray-600">{dataSite.email}</p>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Phone Number</h3>
          <p className="text-gray-600">{dataSite.telephone}</p>
        </div>
      </div>

      <div className="w-full py-5 mt-10 text-center border-t border-t-neutral-300">
        <p className="text-gray-600">{dataSite.name} - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
