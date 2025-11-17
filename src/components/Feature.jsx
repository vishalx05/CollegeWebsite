import React from "react";
import "animate.css";

const features = [
  {
    icon: "ri-macbook-line",
    title: "Advanced Labs",
    desc: "State-of-the-art computer and research laboratories with latest technology equipment."
  },
  {
    icon: "ri-home-4-line",
    title: "Comfortable Hostels",
    desc: "Safe and comfortable accommodation with modern amenities for students."
  },
  {
    icon: "ri-bus-line",
    title: "Transport Facility",
    desc: "Convenient transportation services covering major routes in the city."
  },
  {
    icon: "ri-book-open-line",
    title: "Digital Library",
    desc: "Extensive collection of books, journals, and digital resources for academic excellence."
  },
  {
    icon: "ri-restaurant-line",
    title: "Hygienic Canteen",
    desc: "Clean and spacious cafeteria serving nutritious and delicious meals."
  },
  {
    icon: "ri-wifi-line",
    title: "Campus Wi-Fi",
    desc: "High-speed internet connectivity across the entire campus for seamless learning."
  }
];

const Feature = () => {
  return (
    <div className="w-9/12 mx-auto min-h-screen p-12">
      <div className="text-center mb-10">
        <h1 className="font-bold text-blue-600 text-3xl">College Features</h1>
        <p className="text-gray-500">
          Discover the comprehensive facilities and services that make our institution stand out
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="
            p-6 flex flex-col items-center gap-4 rounded-xl border border-gray-200 shadow-md
            animate__animated animate__fadeInUp
            hover:animate__pulse hover:shadow-lg transition-all duration-300
          "
          >
            <i className={`${item.icon} text-4xl text-indigo-500`}></i>
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-center text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
