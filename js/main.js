const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');




buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
        console.log(item, i);
    });
});
modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active')
});

