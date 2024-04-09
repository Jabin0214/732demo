import React from "react";

const resources = [
  {
    name: "@tailwindcss/forms",
    description: "Provides a basic reset for form styles that looks great with Tailwind.",
    url: "https://github.com/tailwindlabs/tailwindcss-forms",
  },
  {
    name: "@tailwindcss/typography",
    description: "Adds a `prose` class that you can use to style markdown content.",
    url: "https://github.com/tailwindlabs/tailwindcss-typography",
  },
  {
    name: "@tailwindcss/aspect-ratio",
    description: "A plugin that provides a way to create elements with a fixed aspect ratio.",
    url: "https://github.com/tailwindlabs/tailwindcss-aspect-ratio",
  },
  {
    name: "@tailwindcss/line-clamp",
    description: "Provides utilities for truncating text after a fixed number of lines.",
    url: "https://github.com/tailwindlabs/tailwindcss-line-clamp",
  },
  {
    name: "Tailwind UI",
    description: "A collection of beautiful, fully responsive UI components, designed and developed by the creators of Tailwind CSS.",
    url: "https://tailwindui.com/",
  },
  {
    name: "Headless UI",
    description: "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
    url: "https://headlessui.dev/",
  },
  
];

function TailwindResources() {
  return (
    <div className="p-4 max-h-screen overflow-y-auto ">
      <h1 className="text-[70px] max-md:text-[30px] font-bold text-center mb-6 font-bungee">Tailwind CSS Resources & Plugins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg shadow-md hover:shadow-lg  relative overflow-hidden transform transition duration-500 ease-in-out hover:scale-110 hover:bg-slate-500 "

          >
            <h2 className="font-semibold text-lg mb-2 mt-2 mx-2">{resource.name}</h2>
            <p className=" mb-2 mx-2">{resource.description}</p>
          </a>
        ))}
      </div>
      <h1 className="text-2xl font-bold text-center mt-6 font-bungee">And more...</h1>

    </div>
  );
}

export default TailwindResources;
