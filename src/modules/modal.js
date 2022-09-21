import animate from './animate';

const modal = () => {
  document.addEventListener('DOMContentLoaded', () => {
      const popupButtons = document.querySelectorAll('.popup-btn');
      const modal = document.querySelector('.popup');
      const closeModal = modal.querySelector('.popup-close');

    modal.style.display = 'none';

    const hideModal = () => {
      modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
    };

    popupButtons.forEach((item) => {
      item.addEventListener('click', () => {
        if (document.documentElement.clientWidth >= 768) {
          animate({
            timing(timeFraction) {
              return timeFraction;
            },
            duration: 500,
            draw(progress) {
              modal.style.display = 'block';
              modal.style.opacity = `${progress}`;
            },
          });
        } else {
          hideModal();
        }
      });
    });

    closeModal.addEventListener('click', () => {
      if (document.documentElement.clientWidth >= 768) {
        animate({
          timing(timeFraction) {
            return 1 - timeFraction;
          },
          duration: 500,
          draw(progress) {
            modal.style.opacity = `${progress}`;
            // modal.style.display = 'none';
            setTimeout(() => {
              modal.style.display = 'none';
            }, 500);
          },
        });
      } else {
        hideModal();
      }
    });
  });
};

export default modal;