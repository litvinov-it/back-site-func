const Menu = ({ isOpen, setIsOpen }) => {
  const openMenu = () => {
    setIsOpen(true);
    window.history.pushState(null, '', window.location.href);
  };

  const closeMenu = () => {
    setIsOpen(false);
    window.history.back();
  };

  return (
    <div className="fixed top-0 left-0">
      <div className="relative">
        <p onClick={openMenu} className="p-4 bg-slate-600 text-white fixed top-0 left-0 cursor-pointer">Menu button</p>
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
