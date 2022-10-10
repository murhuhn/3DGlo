import timer from './modules/timer';

import menu from './modules/menu';

import modal from './modules/modal';

import validate from './modules/validation';

import tabs from './modules/tabs';

import slider from './modules/slider';

import calc from './modules/calc';

import sendForm from "./modules/sendForm";

timer('22 september 2022');

menu();

modal();

validate();

tabs();

slider();

calc(100);

sendForm({
  idForm: 'form1',
  someElem: [
      {
          type: 'block',
          id: 'total'
      }
  ]
});
sendForm({
  idForm: 'form2',
  someElem: [
      {
          type: 'block',
          id: 'total'
      }
  ]
});
sendForm({
  idForm: 'form3',
  someElem: [
      {
          type: 'block',
          id: 'total'
      }
  ]
});
  