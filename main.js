'use strict';

const inputForm = document.querySelector('form');
const input__item = document.querySelector('.input__item');
const items = document.querySelector('.items');

inputForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    displayItem(input__item.value);
    removeItem();
});





function displayItem(item){
    items.innerHTML += `
    <div class="item">
        <i class="far fa-circle"></i>
        <span>${item}</span>
        <i class="fas fa-trash-alt"></i>
    </div>
    `;
}

function removeItem() {
    const removeBtns = document.querySelectorAll('.fa-trash-alt');
    if(removeBtns===null){
        return;
    }else {
        removeBtns.forEach(removeBtn => {
            removeBtn.addEventListener('click',()=> {
                removeBtn.parentElement.remove();
            });
        });
    }
}

    

