import React from "react";

const Header = () => {
  return (
    <header className="relative  flex justify-center bg-cover items-end h-64  ">
      <div className="mix-blend-color z-[-1] absolute w-full h-full left-0 top-0 bg-[url(../public/header-bg.svg)] bg-cover bg-center grayscale opacity-50 mask-[linear-gradient(to_bottom,black,transparent)]"></div>
      <img src="Logo.svg" alt="" />
    </header>
  );
};

export default Header;
