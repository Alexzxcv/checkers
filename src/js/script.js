let container = $('.container');
let figure = $('img');

$(function () {
    createCell();
    createFigure();
    setDraggable();
    setDroppable();
});

function createCell() {

    let countId = 0;

    for (let i = 1; i < 9; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i % 2) == 0) {
                container.append(`<span class="cell even row${i}" id=c${countId}></span>`);
            }
            else {
                container.append(`<span class="cell odd row${i}" id=c${countId}></span>`);
            }
            countId++;
        }
    }
}

function createFigure() {

    let countId = 0;
    let countRow = 1;

    const place = (id, color) => $(`#c${id}`).append(`<img id=f${id} src=img/${color}1.png>`);

    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 9; j++) {
            if ((j % 2 == 0) && (countRow % 2 !== 0) && (countRow < 4)) {
                place(countId, 'black');
            }
            else if ((j % 2 !== 0) && (countRow % 2 == 0) && (countRow < 4)) {
                place(countId, 'black');
            }
            countId++;
        }
        countRow++;
    }

    countId = 40;
    countRow = 6;

    for (let i = 6; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            if ((j % 2 == 0) && (countRow % 2 !== 0) && (countRow > 5)) {
                place(countId, 'white');
            }
            else if ((j % 2 !== 0) && (countRow % 2 == 0) && (countRow > 5)) {
                place(countId, 'white');
            }
            countId++;
        }
        countRow++;
    }
}

function setDraggable() {
    $('img').draggable();
}

function setDroppable() {
    $('.cell').droppable({
        drop: function (e, ui) {
            const fromCoord = ui.draggable.attr('id');
            const toCoord = this.id;
            console.log(fromCoord)
            moveFigure(fromCoord, toCoord);
        }
    });
}

function moveFigure (fromCoord, toCoord) {
    console.log('move from ' + fromCoord + ' to ' + toCoord);
    const fromEl = document.getElementById(fromCoord);
    const toEl = document.getElementById(toCoord);
    fromEl.style.inset = 0;
    toEl.append( fromEl);
    setDraggable();
}