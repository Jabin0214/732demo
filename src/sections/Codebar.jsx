import { useState } from 'react';

const Codebar = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [showText, setShowText] = useState(true);

  const handleButtonClick = () => {
    setShowIframe(!showIframe);
    setShowText(!showText);
  };

  return (
    <div className='w-full h-full px-10 py-10 flex justify-center items-center relative'>
      {showText && <p className="text-center text-4xl mb-4">Talk is cheap. Show me the code! <br />- Linus Torvalds</p>}
      
      <button onClick={handleButtonClick} className='px-8 py-3 border-2 rounded-3xl text-2xl font-montserrat absolute top-5 left-5'>
        {showIframe ? 'Close It' : 'Have a Try'}
      </button>

      {showIframe && (
        <iframe
          src="https://play.tailwindcss.com/pct6cHHOW6"
          className="px-10 py-10 w-full h-full lg:block hidden"
        ></iframe>
      )}
      {showIframe && (
        <p className='max-lg:block hidden' > [ This is the code experimentation area, which requires a larger screen size for optimal performance. ]
        </p>
      )}
      
    </div>
  );
};

export default Codebar;
