import React, { useEffect, useState } from 'react';

const Header = () => {
  const [themeIndex, setThemeIndex] = useState(0); // 0 = theme1, 1 = theme2, 2 = theme3
  const positions = [5, 30, 58]; // slider positions

  const handleClick = () => {
    const next = (themeIndex + 1) % 3;
    setThemeIndex(next);
    applyTheme(next);
  };

  const applyTheme = (index) => {
    const themeClass = ['theme1', 'theme2', 'theme3'][index];
    document.documentElement.className = themeClass;
    localStorage.setItem('theme', index); // Save theme index
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      const index = Number(savedTheme);
      setThemeIndex(index);
      applyTheme(index);
    } else {
      applyTheme(0);
    }
  }, []);

  return (
    <section className="flex justify-between items-center gap-10 sm:gap-60 w-full">
      <h2 className="font-bold text-[--input-text] text-3xl">Calc</h2>
      <div className="flex items-center gap-6 font-bold text-[--input-text] text-xs">THEME
        <div
          className="relative flex items-center bg-[--toggle-bg] rounded-3xl w-20 h-7 cursor-pointer"
          onClick={handleClick}
        >
          <span className="-top-5 left-3 absolute font-bold">1</span>
          <span className="-top-5 left-9 absolute font-bold">2</span>
          <span className="-top-5 left-16 absolute font-bold">3</span>
          <p
            style={{ left: `${positions[themeIndex]}px` }}
            className="top-[6px] absolute bg-[--equal-bg] rounded-full w-4 h-4 transition-all duration-300"
          ></p>
        </div>
      </div>
    </section>
  );
};

export default Header;
