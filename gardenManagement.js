const temperature = 90
const timeOfDay = "morning"
let soilMoisture = 30

if (temperature > 80) {
    console.log('Watering on');
} else {
    console.log('Watering off');
}

if (timeOfDay === "evening") {
    console.log('Lights on');
} else {
    console.log('Lights off');
}

let s = 30
while (s <40) {
    console.log(s + 5);
    console.log(40)