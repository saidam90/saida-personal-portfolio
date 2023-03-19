'use strict';

const modalOne = document.querySelector('.modal-one');
const modalTwo = document.querySelector('.modal-two');
const modalThree = document.querySelector('.modal-three');
const overlay = document.querySelector('.overlay');
const btnCloseModalOne = document.querySelector('.close-modal-one');
const btnCloseModalTwo = document.querySelector('.close-modal-two');
const btnCloseModalThree = document.querySelector('.close-modal-three');
const btnsShowModalOne = document.querySelectorAll('.show-modal-one');
const btnsShowModalTwo = document.querySelectorAll('.show-modal-two');
const btnsShowModalThree = document.querySelectorAll('.show-modal-three');

const openModalOne = function () {
  modalOne.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openModalTwo = function () {
  modalTwo.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openModalThree = function () {
  modalThree.classList.remove('hidden');
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

const closeModalThree = function () {
  modalThree.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModalOne.length; i++) {
  btnsShowModalOne[i].addEventListener('click', openModalOne);
}

for (let i = 0; i < btnsShowModalTwo.length; i++) {
  btnsShowModalTwo[i].addEventListener('click', openModalTwo);
}

for (let i = 0; i < btnsShowModalThree.length; i++) {
  btnsShowModalThree[i].addEventListener('click', openModalThree);
}

btnCloseModalOne.addEventListener('click', closeModalOne);
btnCloseModalTwo.addEventListener('click', closeModalTwo);
btnCloseModalThree.addEventListener('click', closeModalThree);

overlay.addEventListener('click', function () {
  closeModalOne();
  closeModalTwo();
  closeModalThree();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModalOne();
    closeModalTwo();
    closeModalThree();
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

window.onclick = function (event) {
  if (event.target == modalThree) {
    modalThree.style.display = 'none';
  }
};
