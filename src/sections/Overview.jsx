import React from "react";

function Overview() {
  return (
    <div className="mx-auto flex flex-wrap md:flex-nowrap max-h-screen w-auto overflow-y-auto">
      

      <div className="flex-1 p-4">
      <div className=" top-0 left-0 p-4">
        <h1 className="text-[70px] max-md:text-[30px] font-bungee break-words">Pros & Cons</h1>
      </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Advantages of Tailwind CSS</h2>
          {advantages.map((advantage, index) => (
            <div key={index} className=" shadow-md rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold mb-2 font-montserrat">{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Limitations of Tailwind CSS</h2>
          {limitations.map((limitation, index) => (
            <div key={index} className=" shadow-md rounded-lg p-6 mb-4 ">
              <h3 className="text-xl font-semibold mb-2 font-montserrat">{limitation.title}</h3>
              <p>{limitation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const advantages = [
  {
    title: "Customization at Its Core",
    description: "Tailwind CSS stands out for its deep customization capabilities, allowing developers to tweak almost all of its default styles."
  },
  {
    title: "Utility-First: A Speedy Approach",
    description: "With its utility-first philosophy, Tailwind CSS simplifies the creation of responsive designs by providing a vast array of utility classes."
  },
  {
    title: "Performance Optimization",
    description: "Tailwind CSS's utility classes are highly optimized, ensuring that only the styles you use are included in the final CSS bundle."
  },
  {
    title: "Rapid Prototyping",
    description: "Tailwind CSS's utility classes enable quick prototyping, making it easy to visualize and iterate on designs."
  },
];

// Limitations data
const limitations = [
  {
    title: "The Learning Curve",
    description: "Newcomers accustomed to traditional CSS or component libraries may find the initial adoption of Tailwind's utility classes challenging."
  },
  {
    title: "Readability Concerns",
    description: "An over-reliance on utility classes can clutter HTML markup, potentially compromising readability."
  },
  {
    title: "Maintenance Challenges",
    description: "As projects grow, managing and updating utility classes across a codebase can become cumbersome."
  },
  {
    title: "Design Consistency",
    description: "Maintaining design consistency across a project can be challenging, especially when multiple developers are involved."
  },
  
];

export default Overview;
