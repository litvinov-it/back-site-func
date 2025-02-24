import { useEffect } from 'react';
import usePopState from './usePopState';

export const useBackFunction = ({
  handleMenu: { setIsOpenMenu, isOpenMenu },
  handleScroll,
}) => {
  const handleScrollEvent = () => {
    // Получаем текущий массив истории из sessionStorage, если он существует
    let isScrolled = JSON.parse(sessionStorage.getItem('isScrolled')) || false;
    let isBlock = JSON.parse(sessionStorage.getItem('isBlockScroll')) || false;

    if (isBlock) {
      window.scrollTo(0, 0);
      sessionStorage.setItem('isBlockScroll', false);
    }

    isBlock = JSON.parse(sessionStorage.getItem('isBlockScroll')) || false;

    if (window.scrollY > 0 && !isScrolled && !isBlock) {
      sessionStorage.setItem('isScrolled', true);
      window.history.pushState(null, '', window.location.href);
    } else if (window.scrollY === 0 && isScrolled) {
      sessionStorage.setItem('isBlockScroll', true);
      sessionStorage.setItem('isScrolled', false); // Сохраняем обновленный массив
      window.history.back();
    }
  };

  useEffect(() => {
    if (handleScroll) {
      window.addEventListener('scroll', handleScrollEvent);
    }
    return () => {
      if (handleScroll) {
        window.removeEventListener('scroll', handleScrollEvent);
      }
    };
  });

  usePopState(() => {
    if (isOpenMenu) {
        setIsOpenMenu(false)
    } else if (sessionStorage.getItem('isScrolled') === 'true') {
      console.log('scrolled top');
      sessionStorage.setItem('isBlockScroll', true);
      sessionStorage.setItem('isScrolled', false);
      window.scrollTo(0, 0);
    }
  });
};
