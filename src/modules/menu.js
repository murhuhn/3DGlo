const menu = () => {
  
  const menu = document.querySelector('menu');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      menu.classList.add('active-menu');
    } else if (
      !e.target.closest('menu') ||
      e.target.classList.contains('close-btn') ||
      e.target.closest('a')
    ) {
      menu.classList.remove('active-menu');
    }
  });
};

export default menu;