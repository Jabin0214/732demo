const Instal = () => {
    return (
      <div className="flex flex-wrap overflow-y-auto justify-center max-h-screen ">
        
        
        <div className="px-10 py-10">
          <h1 className="text-[80px] max-md:text-[30px] font-bungee break-words px-10">
          Installation and configuration</h1>
          <h1 className="text-[60px] max-md:text-[30px] font-montserrat font-bold px-10 text-[#61DAFB]">
          For React</h1>


        </div>
        <div className='px-10 py-20 max-h-screen flex  flex-wrap justify-center gap-5 '>
        <div className="card">
          <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
            Step 1: Create your project (Terminal)
          </h3>
          <p className='py-4 text-xl font-montserrat '>
              {">"}npx create-react-app my-project
              <br />
              <br />
              {">"}cd my-project
          </p>
        </div>

        <div className="card">
          <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
            Step 2: Install Tailwind CSS (Terminal)
          </h3>
          <p className='py-4 text-xl font-montserrat '>
            {">"} npm install -D tailwindcss
              <br />
              <br />
            {">"} npx tailwindcss init
          </p>
          </div>

        <div className="card"> 
          <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
              Step 3: Configure your template paths (tailwind.config.js)
            </h3>
            <p>
              Add the following code in module.exports:
              <br />
              content: <br />[ "./src/**/*.{"{js,jsx,ts,tsx}"}" <br /> ],
            </p>
          </div>
          
          <div className="card"> 
        <h3 className='mt-5 font-montserrat text-3xl leading-normal font-bold'>
              Step 4: Include Tailwind CSS in your project (src/index.css)
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
              Step 5: Start your project (Terminal)
            </h3>
            <p className='py-4 text-xl font-montserrat '>
              {">"} npm start
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
        
        




      </div>
      



      
    );
  };
  
  export default Instal;
  