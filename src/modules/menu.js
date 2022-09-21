const menu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = menu.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = () => {
      menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);

    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', handleMenu);
    });
  });
};

export default menu;