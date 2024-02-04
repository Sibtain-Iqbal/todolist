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
