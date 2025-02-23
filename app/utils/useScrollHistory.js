import { useEffect, useRef } from 'react';

export const useScrollHistory = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Получаем текущий массив истории из sessionStorage, если он существует
      let historyArray =
        JSON.parse(sessionStorage.getItem('scrollHistory')) || [];
      let isBlock =
        JSON.parse(sessionStorage.getItem('isBlock')) || false;
      const lastElementScroll =
        historyArray[historyArray.length - 1] === 'scroll';

      console.log({
        scrollY: window.scrollY,
        lastElementScroll,
        isBlock,
      });

      if (isBlock) {
        console.log('scroll to 0');
        window.scrollTo(0, 0);
        sessionStorage.setItem('isBlock', false);
      }

      isBlock =
        JSON.parse(sessionStorage.getItem('isBlock')) || false;

      if (window.scrollY > 0 && !lastElementScroll && !isBlock) {
        console.log('add scroll');
        historyArray.push('scroll');
        sessionStorage.setItem('scrollHistory', JSON.stringify(historyArray));
        window.history.pushState(null, '', window.location.href);
      } else if (window.scrollY === 0 && lastElementScroll) {
        console.log('history back');
        sessionStorage.setItem('isBlock', true);
        window.history.back();
        historyArray.pop(); // Удаляем последний элемент
        sessionStorage.setItem('scrollHistory', JSON.stringify(historyArray)); // Сохраняем обновленный массив
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
