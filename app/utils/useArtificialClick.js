import { useEffect } from 'react';

export const useArtificialClick = () => {
  useEffect(() => {
    // Проверяем, был ли уже выполнен искусственный клик
    if (!sessionStorage.getItem('clicked')) {
      // Создаем новый элемент (например, скрытую кнопку)
      const button = document.createElement('button');
      button.style.display = 'none'; // Делаем кнопку невидимой
      button.textContent = 'Невидимая кнопка'; // Текст кнопки можно не задавать, если он не важен

      // Добавляем кнопку в DOM
      document.body.appendChild(button);

      // Инициируем клик по кнопке
      button.click();
      console.log('click')

      // Удаляем кнопку после клика
      // document.body.removeChild(button);

      // Устанавливаем флаг в sessionStorage, чтобы клик больше не выполнялся
      sessionStorage.setItem('clicked', 'true');
    }
  }, []); // Пустой массив зависимостей, чтобы сработало только один раз
};
