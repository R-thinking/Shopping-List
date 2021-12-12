'use strict';

const inputForm = document.querySelector('form');
const input__item = document.querySelector('.input__item');
const items = document.querySelector('.items');
const addBtn = document.querySelector('.addBtn');

// sol1
// inputForm.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     displayItem(input__item.value);
//     removeItem();
// });

//sol2
addBtn.addEventListener('click',(e) => {
    e.preventDefault();
    onAdd();
});

input__item.addEventListener('keypress',(event)=> {
    if(event==='Enter'){
        onAdd();
    }
});



//function

//sol1. function
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

//sol2. function
function onAdd() {
    //1. fetching text user input.
    const text = input__item.value;
    if(text===''){
        input__item.focus();
        return;
    }
    //2. create new item.
    const item = createItem(text);
    //3. add item in items.
    items.appendChild(item);
    // 4. scroll to the added item.
    item.scrollIntoView({behavior:"smooth"});
    //5. initialize input.
    input__item.value = '';
    input__item.focus();
}

function createItem(text) {
    const item = document.createElement('div');
    item.setAttribute('class','item');
    const circle = document.createElement('i');
    circle.setAttribute('class','far fa-circle');
    const input = document.createElement('span');
    input.textContent = text;
    const trash = document.createElement('i');
    trash.setAttribute('class','fas fa-trash-alt');
    trash.addEventListener('click',() =>{
        items.removeChild(item);
    });

    item.appendChild(circle);
    item.appendChild(input);
    item.appendChild(trash);
    
    return item;
}



