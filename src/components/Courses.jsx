import React from 'react';

const Courses = () => {

  const courses = [
    {
      title: "Computer Science & Engineering",
      desc: "Comprehensive program covering algorithms, data structures, AI, and software development.",
      years: "4 Years",
      seats: "240 Seats",
      bg: "bg-blue-600"
    },
    {
      title: "Mechanical Engineering",
      desc: "Focus on design, analysis, manufacturing, and maintenance of mechanical systems.",
      years: "4 Years",
      seats: "180 Seats",
      bg: "bg-blue-600"
    },
    {
      title: "Business Administration",
      desc: "Develop managerial skills with specializations in Marketing, Finance, and HR.",
      years: "3 Years",
      seats: "120 Seats",
      bg: "bg-blue-600"
    }
  ];

  return (
    <div className="bg-gray-100  p-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-blue-600 text-3xl">Courses Offered</h1>
        <p className="text-gray-500">
          Explore our diverse range of academic programs designed to shape future leaders
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6 w-10/12 mx-auto">

        {courses.map((item, index) => (
          <div key={index} className="shadow-xl rounded-md bg-white">

            {/* Title Bar */}
            <h1 className={`${item.bg} text-white px-4 py-3 rounded-t-md font-semibold`}>
              {item.title}
            </h1>

            {/* Content */}
            <div className="p-4 border border-gray-100 rounded-b-md">
              <p className="text-[13px] mb-4 text-gray-600">
                {item.desc}
              </p>

              {/* Badges */}
              <span className="text-[11px] font-semibold rounded-full px-2 py-1 mr-3 bg-green-100 text-green-700 border border-green-300">
                {item.years}
              </span>

              <span className="text-[11px] font-semibold rounded-full px-2 py-1 bg-yellow-100 text-yellow-700 border-yellow-300">
                {item.seats}
              </span>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Courses;
