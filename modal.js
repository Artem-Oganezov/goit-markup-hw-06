const openModal = document
  .querySelector('.hero-button')
  .addEventListener('click', modalClass);
const closeModal = document
  .querySelector('.modal-close')
  .addEventListener('click', modalClose);
const modal = document.querySelector('.backdrop');

function modalClass() {
  modal.classList.add('is-open');
}

function modalClose() {
  modal.classList.remove('is-open');
}
