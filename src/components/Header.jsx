import React, { useState } from "react";
import hamburgerMenu from "../images/menu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-kape-black flex items-center justify-between px-6 py-6">
      <a href="/" class="text-kape-beige text-4xl">
        Kape
      </a>
      {/* <button
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(true)}
            >
                <svg src={hamburgerMenu} alt="Navigation menu" />
            </button> */}
    </header>
  );
};

export default Header;
