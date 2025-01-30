"use client";

import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import products from "@/data/products";
import { useInformation } from "@/store/useInformation";
import { formatNumber, useCart } from "ecommerce-mxtech";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Home() {
  const { dataSite } = useInformation();

  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  console.log(products);

  return (
    <main>
      <Navbar />

      {/* Hero sections */}
      <div className="flex items-center flex-col w-full mt-10">
        <div className="inline-block bg-primary-100 text-primary-700 rounded-full px-6 py-2 mb-12">
          Over 1 million learners mastering legal procedures!
        </div>

        <h1 className="text-center text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
          Navigate Legal Processes with Our Expert-Led Workshops
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg text-center">
          {dataSite.subtitle}
        </p>

        <Link href="/#courses">
          <button className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-primary-600 transition-colors">
            Join Course
          </button>
        </Link>

        <div className="container px-m flex flex-col gap-20 items-center mt-20">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg font-medium">
              Embark on a practical educational journey{" "}
              <span role="img" aria-label="scales">
                ⚖️
              </span>{" "}
              that equips you with essential legal skills. Our comprehensive
              courses, led by legal experts, and interactive{" "}
              <span role="img" aria-label="workshop">
                🛠️
              </span>{" "}
              workshops provide the tools you need to manage legal procedures
              effectively, from business registration to contract management.
              Join us today and take the first step{" "}
              <span className="bg-yellow-200 px-2 py-1 rounded-full">
                Empowerment
              </span>{" "}
              in legal proficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {dataSite.info.map((info, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-sm border-neutral-500 p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-third h-[180px] text-white py-8 mt-20">
        <div className="h-full max-w-4xl mx-auto flex items-center justify-around">
          <div className="text-center">
            <h2 className="text-3xl font-bold">700+</h2>
            <p>Success Stories</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">200+</h2>
            <p>Expert Instructors</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">80k+</h2>
            <p>Worldwide Learners</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">500+</h2>
            <p>Legal Topics</p>
          </div>
        </div>
      </div>

      {/* New Services Section */}
      <div className="max-w-6xl mx-auto my-12" id="our-services">
        <h2 className="text-3xl font-bold text-center mb-4">
          Services Designed for Legal Mastery
        </h2>
        <p className="text-center text-gray-600 mb-8">
          From foundational services that lay the groundwork for your legal
          journey to advanced specializations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataSite?.services?.map((service, index) => (
            <div key={index} className="bg-white shadow-md text-center">
              {/* Image at the top of the card */}
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
                width={500}
                height={500}
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Card Section */}
      <div className="max-w-6xl mx-auto my-12" id="courses">
        <h2 className="text-3xl font-bold text-center mb-4">
          Community Passionate About Knowledge
        </h2>
        <p className="text-center text-gray-600 mb-8">
          From foundational courses that lay the groundwork for your educational
          journey to advanced specializations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataSite.products.map((course, index) => {
            const existProduct = validateProductInCart(course.id);

            return (
              <div
                key={index}
                className="bg-white shadow-md overflow-hidden flex flex-col"
              >
                <Image
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                  width={500}
                  height={500}
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div className="flex flex-col gap-4 mb-2">
                    <h3 className="text-xl font-semibold">{course.name}</h3>

                    <div className="flex flex-wrap gap-2">
                      {course.content
                        .split(",")
                        .slice(0, 5)
                        .map((badge, index) => (
                          <div
                            className="bg-primary text-white rounded-full px-2 py-1"
                            key={index}
                          >
                            <span className="line-clamp-1 text-[10px]">
                              {badge.trim()}
                            </span>
                          </div>
                        ))}
                    </div>

                    <p className="text-gray-600">{course.description}</p>
                  </div>

                  <div className="flex-1 flex flex-col justify-end">
                    <p className="text-lg font-bold mb-4">
                      {formatNumber(course.price)} MXN
                    </p>
                    <button
                      className="w-full text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-colors"
                      onClick={() => handleAddOrRemoveProduct(course.id)}
                      style={{
                        backgroundColor: existProduct ? "#007bff" : "#7bbafd",
                      }}
                    >
                      {existProduct ? "Buy" : "Remove"} course
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* New Promotional Section */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between bg-primary text-white p-8 rounded-lg my-12">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">
              Join us today to master legal procedures with confidence!
            </h2>
            <p className="mb-6">
              Take advantage of our comprehensive resources, expert guidance,
              and supportive community to achieve your legal and professional
              goals.
            </p>

            <Link href="/#courses">
              <button className="bg-white text-primary px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
                Join Course
              </button>
            </Link>
          </div>
          {/* Image placeholder */}
          {/* <div className="hidden md:block">
            <img
              src="https://via.placeholder.com/300x400"
              alt="Promotional"
              className="rounded-lg"
            />
          </div> */}
        </div>
      </div>

      {/* Customer References Section */}
      <div className="max-w-6xl mx-auto mb-20" id="references">
        <h2 className="text-3xl font-bold text-center mb-4">
          Customer References
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataSite.references.map((customer, index) => (
            <div key={index} className="bg-white shadow-md p-8">
              <div className="flex justify-between w-full items-center gap-5 mb-3">
                <h3 className="text-xl font-semibold mb-2">{customer.name}</h3>

                <div className="flex items-center justify-center">
                  <div className="bg-primary text-white ml-2 px-2 py-1 rounded-full flex items-center gap-2">
                    <FaStar className="text-yellow-500" /> <span>4.5</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600">{customer.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
