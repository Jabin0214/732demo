const Part1 = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex justify-center items-center">
        <h1 className="text-[70px] max-md:text-[40px] font-bungee  text-center">
          Welcome to my TailwindCss Tutorial
        </h1>
      </div>
      <div className="shadow-lg p-4 rounded-2xl max-w-[1000px] mx-auto">
        <p className="py-10 px-10 font-montserrat font-bold text-xl">
          Tailwind CSS is a polarizing front-end development tool.
          Those who admire it consider it a development marvel, cherishing it dearly, while those who haven't used it may view it as an unconventional and regressive consequence of technological evolution.
          Why is this the case? First,
          let's introduce what it is.
          
        </p>
        <p className="py-10 px-10 font-montserrat font-bold bottom-0">
          *This website serves as a demonstration and promotion platform for Tailwind CSS. It cannot provide a detailed introduction to the entire Tailwind CSS framework.
          Its purpose is to give you a brief understanding of this interesting tool.
          For more information, please refer to the official website link at the top of the page.       
        </p>
      </div>
    </div>
  );
};

export default Part1;
