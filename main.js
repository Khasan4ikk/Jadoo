const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-mobile');
const navLink = document.querySelectorAll('.nav-list a'); // Получаем все ссылки в меню

// Обработчик клика для кнопки гамбургера
burger.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  burger.classList.toggle('active');
});

// Обработчик клика для ссылок в меню
navLink.forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active'); // Закрываем меню
    burger.classList.remove('active'); // Изменяем состояние кнопки
  });
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Предотвращаем стандартный переход по ссылке

    const target = document.querySelector(this.hash);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});



AOS.init();