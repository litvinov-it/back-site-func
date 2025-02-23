import { useEffect } from 'react';

const usePopState = (callback) => {
  useEffect(() => {
    const handlePopState = (event) => {
      callback(event.state); // Передаём данные из истории
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [callback]);
};

export default usePopState;
