const sendForm = ({ idForm, someElem = [] }) => {
    const form = document.getElementById(idForm);
    const formElements = form.querySelectorAll('input');
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';
    const valMessage = document.querySelector('[placeholder="Ваше сообщение"]');
    const valName = document.querySelectorAll('[placeholder="Ваше имя"]');
    const valPhone = document.querySelectorAll('[placeholder="Номер телефона"]');


    const validate = () => {
        let success = true;

        valMessage.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ 0-9 , . - \s]/g, "");
        });
        valName.forEach(valName => valName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ ]/g, "");
        }));
        valPhone.forEach(valPhone => valPhone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^+() 0-9 -]+(.*)/, '$1');
        }));
        return success;
    };


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };


    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formbody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);
        if (form.getAttribute('id') === 'form3') {
            statusBlock.style.color = 'white';
          }
        formData.forEach((val, key) => {
            formbody[key] = val;
        });
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formbody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formbody[elem.id] = element.value;
            }
        });


        if (validate(formElements)) {
            sendData(formbody)
                .then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = '';
                    });
                    setTimeout(clear, 3000);
                }).catch(error => {
                    statusBlock.textContent = errorText;
                });
                
        } else {
            alert('Данные не валидны!');
        }
    };

    try {
        if (!form) {
            throw new Error('Пожалуйста, верните форму на место');
        }
        
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                let count = 0;
                formElements.forEach(el => {
                    if (el.type === 'email' && el.value === '' || el.type === 'tel' && el.value === '' || el.type === 'text' && el.value === '') {
                        count++;
                    }
                });
                
                if (count === 0) {
                     submitForm();
                 }
            });
            
            
    } catch (error) {
        console.log(error.message);
    }
    const clear = () => {
        statusBlock.textContent = '';
    };
};

export default sendForm;