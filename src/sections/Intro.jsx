

const Intro = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center bg-transparent">
          <img src="./tailwindcss-mark.svg"  alt="Company Logo"/>
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className=" border-b-2 border-[#37BCF8] uppercase">About</span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl ">About
                <span className="text-[#37BCF8]"> TailwindCss</span>
              </h2>
          <p className="text-gray-700 dark:text-white">
            Tailwind CSS, a popular framework, offers an atomic-level approach to UI building through CSS classes.
            Unlike traditional frameworks, it lacks predefined components, instead breaking down style properties into atomic-level classes.
            For instance, bg-blue-500 sets a blue background, and py-4 sets vertical padding.
            This flexibility enables rapid custom UI development directly in HTML.
            The typical workflow involves adding classes in HTML and transforming them into CSS, optimizing performance.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Intro;
