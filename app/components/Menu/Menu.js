import { useState } from 'react';

const Menu = ({ isOpen, setIsOpen }) => {
  const openMenu = () => {
    setIsOpen(true);
    console.log('add MENU');
    let historyArray =
      JSON.parse(sessionStorage.getItem('scrollHistory')) || [];
    historyArray.push('menu');
    sessionStorage.setItem('scrollHistory', JSON.stringify(historyArray));
    window.history.pushState(null, '', window.location.href);
  };

  const closeMenu = () => {
    setIsOpen(false);
    console.log('remove MENU');
    let historyArray =
      JSON.parse(sessionStorage.getItem('scrollHistory')) || [];
    historyArray.pop(); // Удаляем последний элемент
    sessionStorage.setItem('scrollHistory', JSON.stringify(historyArray));
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
