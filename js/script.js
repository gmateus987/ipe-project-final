const emailButton = document.getElementById('edit-email');
const modalContainer = document.getElementById('modal-box');
const closeButton = document.getElementById('close-modal');
const confirmButton = document.getElementById('confirm-changes');

function openModal() {
    modalContainer.classList.add("active")
}

function closeModal() {
    modalContainer.classList.remove("active")
}

closeButton.addEventListener('click', closeModal);
confirmButton.addEventListener('click', closeModal);
emailButton.addEventListener('click', openModal)