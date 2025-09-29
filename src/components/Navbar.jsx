import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`navbar py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${active ? "bg-zinc-900/50 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-3xl font-bold">Portfolio.</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-white text-3xl">
            {menuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center sm:gap-10 gap-4">
          <li>
            <a href="#beranda" className="sm:text-lg text-base font-medium">
              Beranda
            </a>
          </li>
          <li>
            <a href="#tentang" className="sm:text-lg text-base font-medium">
              Tentang
            </a>
          </li>
          <li>
            <a href="#proyek" className="sm:text-lg text-base font-medium">
              Proyek
            </a>
          </li>
          <li>
            <a href="#kontak" className="sm:text-lg text-base font-medium">
              Kontak
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul
            className="md:hidden absolute top-full left-0 w-full bg-zinc-900/90 backdrop-blur-lg flex flex-col items-center gap-6 py-8"
            onClick={closeMenu}
          >
            <li>
              <a href="#beranda" className="sm:text-lg text-base font-medium">
                Beranda
              </a>
            </li>
            <li>
              <a href="#tentang" className="sm:text-lg text-base font-medium">
                Tentang
              </a>
            </li>
            <li>
              <a href="#proyek" className="sm:text-lg text-base font-medium">
                Proyek
              </a>
            </li>
            <li>
              <a href="#kontak" className="sm:text-lg text-base font-medium">
                Kontak
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;