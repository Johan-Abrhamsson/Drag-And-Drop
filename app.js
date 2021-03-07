var turn = true;
// select the item element

const item = document.getElementById('item');
const item2 = document.getElementById('item2');


item.addEventListener('dragstart', dragStartyellow);
item2.addEventListener('dragstart', dragStartred);

console.log(item);
console.log(item2);
function dragStartyellow(e) {
    console.log(e);
    if(turn){
    console.log('drag starts...');
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
    }
    else {
    }
}

function dragStartred(e) {
    console.log(e.target);
    if(!turn){
    console.log('drag starts...');
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
    }
    else {
    }
}
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    var draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    console.log(id)
    console.log(draggable)

    // display the draggable element
    draggable.classList.remove('hide');
    
    turn = !turn;

    console.log(turn)
}