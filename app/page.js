'use client';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import { useBackFunction } from './utils/useBackFunction';
import Link from 'next/link';

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useBackFunction({
    handleMenu: { setIsOpenMenu, isOpenMenu },
    handleScroll: true,
  });

  return (
    <main className="h-[2200px] bg-black">
      <div className='h-[20px] w-full bg-red-50 text-black flex justify-center'>верх страницы</div>
      <Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      <Link
        className="p-4 bg-slate-600 text-white fixed bottom-2 left-1/2 cursor-pointer"
        href="test"
      >
        GO test PAGE
      </Link>
      <div
        className="p-4 bg-slate-600 text-white fixed bottom-2 left-1/4 cursor-pointer"
        onClick={() => window.history.back()}
      >
        back
      </div>
    </main>
  );
}
