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
        for (let j = 1; j < 9; j++) {
            if ((i % 2) == 0) {
                container.append(`<span class="cell even row${i}" id=c${i}${j}></span>`);
            }
            else {
                container.append(`<span class="cell odd row${i}" id=c${i}${j}></span>`);
            }
            countId++;
        }
    }
}

function createFigure() {

    let countId = 0;
    let countRow = 1;

    const place = (i, j, color) => $(`#c${i}${j}`).append(`<img id=f${i}${j} src=img/${color}1.png>`);

    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 9; j++) {
            if ((j % 2 == 0) && (countRow % 2 !== 0) && (countRow < 4)) {
                place(i, j, 'black');
            }
            else if ((j % 2 !== 0) && (countRow % 2 == 0) && (countRow < 4)) {
                place(i, j, 'black');
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
                place(i, j, 'white');
            }
            else if ((j % 2 !== 0) && (countRow % 2 == 0) && (countRow > 5)) {
                place(i, j, 'white');
            }
            countId++;
        }
        countRow++;
    }
}

function setDraggable() {
    $('img').draggable({
        start: function(e, ui) {
            // const fromCoord = ui.offsetParent().attr('id');
            // const fromrt = this.id;

            // console.log(fromCoord);
            // console.log(fromrt);
            console.log(ui);
            console.log(e);
        },
        containment: '.container'
    });
}

function setDroppable() {
    $('.cell').droppable({
        drop: function (e, ui) {
            console.log(ui);
            const fromFigure = ui.draggable.attr('id');
            const toCoord = this.id;
            console.log(e)
            moveFigure(fromFigure, toCoord);
        }
    });
}

function moveFigure(fromFigure, toCoord) {
    console.log('move from ' + fromFigure + ' to ' + toCoord);

    const fromEl = document.getElementById(fromFigure);
    const toCell = document.getElementById(toCoord);

    const rowTo = toCoord.substring(1, 2);
    const columnTo = toCoord.substring(2);

    // if () {
    //     toCell.append(fromEl);
    //     fromEl.style.inset = 0;
    // }

    fromEl.style.inset = 0;
    setDraggable();
}