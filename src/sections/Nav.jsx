import { menu } from "../assets/icons";

const Nav = () => {
    return (
      <header className='px-3 py-3 w-full darkbg'>
        <nav className='flex justify-between items-center max-container'>
        <p className="text-3xl font-bold font-bungee">TailwindCss Tutorial</p>   
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            
            <li >
                <a href='/'
                  className='font-montserrat leading-normal text-lg text-slate-gray'>
                  Home
                </a>
                </li>     
            <li >
                <a href='https://tailwindcss.com/'
                  className='font-montserrat leading-normal text-lg text-slate-gray'>
                  Offecial Web 
                </a>
                </li>
            <li >
                <a href='https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Jabin0214'
                  className='font-montserrat leading-normal text-lg text-slate-gray'>
                  Github
                </a>
            </li>
           
          </ul>
                
        <div className='hidden max-lg:block'>
            <img src={menu} alt='hamburger icon' width={30} height={30} />
        </div>
        </nav>
      </header>
    );
  };
  
export default Nav;
  