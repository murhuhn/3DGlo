
const validate = () => {

  const calcItem = document.querySelectorAll('.calc-item'),
        userName = document.querySelectorAll('[name="user_name"]'),
        userEmail = document.querySelectorAll('[name="email_name"]'),
        userPhone = document.querySelectorAll('[name="user_phone"]');

  const cyrillicValidation = (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-я\-\s]/, '');
  };

  const emailValidation = (e) => {
    e.target.value = e.target.value.replace(/\S+[\w\.-]+@\S+\.\S+/, '');
  };

  const phoneValidation = (e) => {
    e.target.value = e.target.value.replace(/[a-zA-Zа-яА-Я!@#$%&*_=]+$/, '');
  };
  
  calcItem.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9\.]/, '');
    });
  });

  userName.forEach((item) => {
    item.addEventListener('input', cyrillicValidation);
  });

  userEmail.forEach((item) => {
    item.addEventListener('input', emailValidation);
  });

  userPhone.forEach((item) => {
    item.addEventListener('input', phoneValidation);
  });
};

export default validate;