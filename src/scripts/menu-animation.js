const burgerMenu = document.getElementById("burger");
const sideMenu = document.querySelector(".side-menu");
const sideMenuInner = document.querySelector(".side-menu__inner");

burgerMenu.addEventListener("click", () => {
  sideMenu.classList.toggle("show-side-menu");
  sideMenu.classList.toggle("hide-side-menu");
  burger.classList.toggle("active");
});

sideMenu.addEventListener("click", () => {
  sideMenu.classList.remove("show-side-menu");
  sideMenu.classList.toggle("hide-side-menu");
  burger.classList.toggle("active");
});
sideMenuInner.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll('.box');
  console.log(boxes);

  // Создаём экземпляр IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) { // Если элемент виден
              entry.target.classList.add('visible'); // Добавляем класс для анимации
              observer.unobserve(entry.target); // Убираем наблюдение за этим элементом
          }
      });
  }, {
      threshold: 0.1 // Настройка порога видимости (10%)
  });

  // Наблюдаем за каждым элементом
  boxes.forEach(box => {
      observer.observe(box);
  });
});