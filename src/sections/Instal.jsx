const Instal = () => {
  return (
    <div className='px-10 py-20 max-h-screen overflow-y-auto flex flex-wrap justify-center gap-5'>
      <div>
        <h1 className='text-[80px] max-md:text-[20px] font-bungee break-words px-8'>
          Install and Configure</h1>
        <h1 className='text-[60px] max-md:text-[20px] font-montserrat font-bold px-8 text-[#61DAFB]'>
          For React</h1>
      </div>

      <div className='card'>
        <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
          Step 1: Create your project <span className="text-xl"> (Terminal) </span>
        </h3>
        <p className='py-4 text-xl font-montserrat '>
          {">"}npm create vite@latest my-project -- --template react
          <br />
          <br />
          {">"}cd my-project

        </p>
      </div>

      <div className='card'>
        <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
          Step 2: Install Tailwind CSS <span className="text-xl"> (Terminal) </span>
        </h3>
        <p className='py-4 text-xl font-montserrat '>
          {">"} npm install -D tailwindcss postcss autoprefixer
          <br />
          <br />
          {">"} npx tailwindcss init -p
        </p>
      </div>

      <div className="card">
        <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
          Step 3: Configure your template paths <span className="text-xl">(tailwind.config.js)</span>
        </h3>
        <p>
          <code>
            content: [
            <br />
            "./index.html",
            <br />
            "./src/**/*&#123;js,ts,jsx,tsx&#125;",
            <br />
            ],
          </code>
        </p>
      </div>

      <div className='card'>
        <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
          Step 4: Include Tailwind CSS in your project <span className="text-xl">(src/index.css) </span>
        </h3>
        <p>
          Add the following code in index.css:
          <br />
          @import 'tailwindcss/base';
          <br />
          @import 'tailwindcss/components';
          <br />
          @import 'tailwindcss/utilities';
        </p>
      </div>

      <div className="card">
        <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
          Step 5: Start your project <span className="text-xl"> (Terminal) </span>
        </h3>
        <p className='py-4 text-xl font-montserrat '>
          {">"} npm run dev
        </p>
      </div>

      <div className="card">
        <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
          Step 6: Start coding with Tailwind CSS
        </h3>
        <p className='py-4 text-xl font-montserrat '>
          Start adding Tailwind CSS classes in your project.
        </p>
      </div>
    </div>

  );
};

export default Instal;
