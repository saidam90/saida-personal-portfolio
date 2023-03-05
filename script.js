'use strict';

const modalOne = document.querySelector('.modal-one');
const modalTwo = document.querySelector('.modal-two');
const overlay = document.querySelector('.overlay');
const btnCloseModalOne = document.querySelector('.close-modal-one');
const btnCloseModalTwo = document.querySelector('.close-modal-two');
const btnsShowModalOne = document.querySelectorAll('.show-modal-one');
const btnsShowModalTwo = document.querySelectorAll('.show-modal-two');

const openModalOne = function () {
  modalOne.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openModalTwo = function () {
  modalTwo.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalOne = function () {
  modalOne.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeModalTwo = function () {
  modalTwo.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModalOne.length; i++) {
  btnsShowModalOne[i].addEventListener('click', openModalOne);
}

for (let i = 0; i < btnsShowModalTwo.length; i++) {
  btnsShowModalTwo[i].addEventListener('click', openModalTwo);
}

btnCloseModalOne.addEventListener('click', closeModalOne);
btnCloseModalTwo.addEventListener('click', closeModalTwo);

overlay.addEventListener('click', function () {
  closeModalOne();
  closeModalTwo();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModalOne();
    closeModalTwo();
  }
});

window.onclick = function (event) {
  if (event.target == modalOne) {
    modalOne.style.display = 'none';
  }
};

window.onclick = function (event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = 'none';
  }
};
