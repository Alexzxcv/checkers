$(".row8:odd").append('<img src=img/black1.png>')
$(".row7:even").append('<img src=img/black1.png>')
$(".row6:odd").append('<img src=img/black1.png>')

$(".row3:even").append('<img src=img/white1.png>')
$(".row2:odd").append('<img src=img/white1.png>')
$(".row1:even").append('<img src=img/white1.png>')

let cell = $('.container');



function createCell () {
    for (let i = 0; i < 64; i++) {
        cell.append(`<span class=cell id=${i}cell>${i}</span>`);
    }
}
createCell();