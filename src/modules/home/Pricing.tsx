import React from "react";
import { FaStar, FaCheck, FaLock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Pricing = (props: Props) => {
  const features = [
    "1 Domain License",
    "Full Celebration Library",
    "120+ Coded Blocks",
    "Design Files Included",
    "Premium Support",
  ];

  return (
    <section className="py-10 bg-whitesm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:leading-tight lg:text-5xl">
              Your thought our duty
            </h2>

            <div className="mt-auto">
              <div className="flex items-center space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="w-6 h-6 text-orange-500" />
                  ))}
              </div>

              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed text-vlack">
                  Build your resume website hastle free with us
                </p>
              </blockquote>

              
            </div>
          </div>

          <div>
            <div className="overflow-hidden bg-white rounded-md">
              <div className="p-10">
                <h3 className="text-xs font-semibold tracking-widest text-purple-600 uppercase">
                  Single pack
                </h3>
                <p className="mt-4 text-6xl font-bold text-black">$99</p>

                <ul className="flex flex-col mt-8 space-y-4">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="inline-flex items-center space-x-2"
                    >
                      <FaCheck className="w-5 h-5 text-green-500" />
                      <span className="text-base font-medium text-gray-900">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  className="inline-flex items-center justify-center w-full px-8 py-4 mt-10 font-semibold text-white transition-all duration-200 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                  href="#"
                >
                  Get full access
                </Link>

                <div className="flex items-center mt-5">
                  <FaLock className="w-5 h-5 text-gray-500" />
                  <span className="ml-2 text-sm text-gray-500">
                    30 Days Moneyback Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
