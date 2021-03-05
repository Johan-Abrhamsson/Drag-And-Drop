var turn = true;
// select the item element

const item = document.getElementById('item');
const item2 = document.getElementById('item2');


item.addEventListener('dragstart', dragStart);
item2.addEventListener('dragstart', dragStart);

function evalTurn() {

    if (turn) {
        item.setAttribute("draggable", "true");
        item2.setAttribute("draggable", "false");
    } else {
        item.setAttribute("draggable", "false");
        item2.setAttribute("draggable", "true");
    }

}

console.log(item);
console.log(item2);
function dragStart(e) {
    console.log(e)
    console.log('drag starts...');
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
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
    evalTurn();

    console.log(turn)
}

evalTurn();