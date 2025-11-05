function getRandom(x) {
    return Math.floor(Math.random() * x) + 1;
}

function getPowerNum() {
    let arr = [];

    for (let i = 0; i < 6; i++) {
        let num = getRandom(38);

        if (arr.indexOf(num) > -1) {
            i--;
            continue;
        } else {
            arr.push(num);
        }
    }

    arr.sort(function (a, b) {
        return a - b;
    });

    return arr;
}

let arr1 = getPowerNum();
let num1 = arr1.join(",");
let num2 = getRandom(8);

console.log(`第一區號碼為: ${num1}, 第二區號碼為: ${num2}`);