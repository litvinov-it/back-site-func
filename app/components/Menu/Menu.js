import { useState } from 'react';

const Menu = ({ isOpen, setIsOpen }) => {
  const openMenu = () => {
    setIsOpen(true);
    sessionStorage.setItem('isOpenMenu', true);
    window.history.pushState(null, '', window.location.href);
  };

  const closeMenu = () => {
    setIsOpen(false);
    sessionStorage.setItem('isOpenMenu', false);
    window.history.back();
  };

  return (
    <div className="fixed top-0 left-0">
      <div className="relative">
        <p onClick={openMenu}>Menu button</p>
        {isOpen && (
          <div
            className="absolute top-0 left-0 h-screen z-10 bg-slate-300 text-black p-4 min-w-[300px]"
            onClick={closeMenu}
          >
            MENU CONTENT
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
