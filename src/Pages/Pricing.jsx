import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const packages = [
    {
      name: "Instagram Post Story",
      price: "600,000 IDR",
      features: [
        "Increase Brand Awareness",
        "Build Trust & Social Proof",
        "Increase Traffic & Sales",
        "Reach a More Targeted Audience",
        "Fast Engagement",
      ],
    },
    {
      name: "Instagram Feed Photo",
      price: "850,000 IDR",
      features: [
        "Increase Brand Awareness",
        "Build Trust & Social Proof",
        "Increase Traffic & Sales",
        "Reach a More Targeted Audience",
        "Fast Engagement",
      ],
    },
    {
      name: "Instagram Reels/Video",
      price: "1,500.000 IDR",
      features: [
        "Increase Brand Awareness",
        "Build Trust & Social Proof",
        "Increase Traffic & Sales",
        "Reach a More Targeted Audience",
        "Fast Engagement",
      ],
    },
    {
        name: "Tiktok Vidio",
        price: "2,000.000 IDR",
        features: [
        "Increase Brand Awareness",
        "Build Trust & Social Proof",
        "Increase Traffic & Sales",
        "Reach a More Targeted Audience",
        "Fast Engagement",
        ],
      },
  ];

  return (
    <section className="bg-grey-400 px-6 lg:px-24 flex flex-col items-center mt-[176px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 w-full max-w-7xl">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-80"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h3
              className="text-gray-800 text-lg font-semibold"
              data-aos="fade-down"
              data-aos-delay={index * 200 + 100}
            >
              {pkg.name}
            </h3>
            <p
              className="text-3xl font-bold mt-2"
              data-aos="zoom-in"
              data-aos-delay={index * 200 + 200}
            >
              {pkg.price}
            </p>
            {/* <button
              className="mt-4 w-full py-2 border rounded-md text-gray-800 font-medium hover:bg-gray-100 transition"
              data-aos="fade-up"
              data-aos-delay={index * 200 + 300}
            >
              Get Started
            </button> */}
            <hr
              className="my-4"
              data-aos="fade-in"
              data-aos-delay={index * 200 + 400}
            />
            <ul className="mt-2 space-y-2 text-black text-sm">
              {pkg.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 200 + (i + 1) * 100}
                >
                  <FaCheckCircle size={16} color="#6b7280" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
