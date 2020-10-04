//essay 4
console.log('=============================');
function snakeLadders() {
    var rect = "";
    var num = 101
    for (var i = 0; i <= 9; i += 1) {
        rect += (num -= 1) + " "
        for (var j = 0; j < 9; j += 1) {
            rect += (num -= 1) + " "
        }
        rect += "\n"
    }

    return rect;
}

console.log(snakeLadders())