if (temperature > 30) {
    console.log("It's hot outside!");
}
if (temperature > 30) {
    console.log("It's hot outside!");
} else {
    console.log("It's not so hot outside.");
}

if (temperature > 30) {
    console.log("It's hot outside!");
} else if (temperature < 10) {
    console.log("It's cold outside!");
} else {
    console.log("It's a pleasant day.");
}

let message = temperature > 30 ? "It's hot outside!" : "It's not so hot.";
console.log(message);

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log("Today is " + day);


for (let i = 0; i < 10; i++) {
    console.log(i);
}
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

const array = [1, 2, 3, 4, 5];
for (const value of array) {
    console.log(value);
}
