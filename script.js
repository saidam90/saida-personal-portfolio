class Modal {
  constructor(modal, openButtons, closeButton) {
    this.modal = document.querySelector(modal);
    this.openButtons = document.querySelectorAll(openButtons);
    this.closeButton = document.querySelector(closeButton);
    this.overlay = document.querySelector('.overlay');

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openButtons.forEach(button => {
      button.addEventListener('click', this.openModal);
    });

    this.closeButton.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  openModal() {
    this.modal.classList.remove('hidden');
    this.overlay.classList.remove('hidden');
  }

  closeModal() {
    this.modal.classList.add('hidden');
    this.overlay.classList.add('hidden');
  }
}

const modalOne = new Modal('.modal-one', '.show-modal-one', '.close-modal-one');
const modalTwo = new Modal('.modal-two', '.show-modal-two', '.close-modal-two');
const modalThree = new Modal('.modal-three', '.show-modal-three', '.close-modal-three');
const modalFour = new Modal('.modal-four', '.show-modal-four', '.close-modal-four');
