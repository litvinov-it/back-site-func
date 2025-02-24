'use client';
import { useState } from "react";
import Menu from "../components/Menu/Menu";
import usePopState from "../utils/usePopState";

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <main className="h-[2200px] flex flex-col justify-center items-center bg-black">
      <Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      <div className="p-4 bg-slate-600 text-white fixed bottom-2 left-1/4 cursor-pointer" onClick={() => window.history.back()}>back</div>
    </main>
  );
}
