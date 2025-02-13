let weightLbs;
let heightInches;



function calculateBMI(weightLbs,heightInches) {
    return weightLbs / ((heightInches * heightInches) / 703);
}
calculateBMI();

let userBMI = calculateBMI();

if (userBMI <= 18.4 ) {
    console.log("Underweight");
} else if (18.5 <= userBMI < 24.9){
    console.log( "Normal Weight");
} else if (25 < userBMI < 30){
    console.log( "Overweight");
} else {
    console.log("Obese");
}
console.log(calculateBMI(180, 70));
