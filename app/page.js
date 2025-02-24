'use client';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import usePopState from './utils/usePopState';
import { useScrollHistory } from './utils/useScrollHistory';
import Link from 'next/link';

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useScrollHistory();
  usePopState((event) => {
    const historyArray =
      JSON.parse(sessionStorage.getItem('scrollHistory')) || [];
    const lastElement = historyArray[historyArray.length - 1];
    if (lastElement === 'menu') {
      setIsOpenMenu(false);
      historyArray.pop();
      sessionStorage.setItem('scrollHistory', JSON.stringify(historyArray));
    } else if (lastElement === 'scroll') {
      console.log('last scroll');
      sessionStorage.setItem('isBlock', true);
      historyArray.pop();
      sessionStorage.setItem('scrollHistory', JSON.stringify(historyArray));
      window.scrollTo(0, 0);
    }
  });

  return (
    <main className="h-[2200px] flex flex-col justify-center items-center bg-black">
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
