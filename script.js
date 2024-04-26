'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModalWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// loop through btnsOpenModal Array
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModalWindow);

const closeModalWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsCloseModal.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

// keyboard events are global , so we should listen for it through whole document

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalWindow();
  }
});
