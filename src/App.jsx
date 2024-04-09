import { Home, Codebar, Intro, FeatureIntro, Nav,Instal, Overview,Resourse } from "./sections";
import { useEffect, useState } from "react";
import "./index.css";


const App = () => {

  const [theme, setTheme] = useState('light');
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);


  return (
    <main className='relative'>
      <Nav />
      <section className="section from-slate-100 to-slate-200 overflow-auto darkbg">
          <Home />
      </section>

      <section className="section from-slate-100 to-red-300 darkbg">
          <Intro />
      </section>

      <section className="section from-red-300 to-orange-400 darkbg">
        <Codebar />
      </section>

      <section className="section from-orange-300 to-yellow-400 darkbg">
        <FeatureIntro handleThemeSwitchFunction={handleThemeSwitch} />
      </section>

      <section className="section from-yellow-300 to-green-400 darkbg">
        <Instal />
      </section>

      <section className="section from-green-300 to-blue-400 darkbg">
        <Overview />  
      </section>

      <section className="section from-blue-300 to-purple-400 darkbg">
        <Resourse />
      </section>

      <section className="section from-purple-300 to-black darkbg">
        <h1 className="text-4xl font-bungee "> Thanks to Visit This Site</h1>
        <h2 className="text-2xl font-bold font-montserrat text-color-shift">
        -- This site is under continuous development
        </h2>
      </section>
    </main>
  );
};

export default App;
