//A
const longestStringFromArray = (
  lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"]
) => {
  let stringLength = 0;
  let stringIndex = 0;

  lunchArray.forEach((element, index) => {
    if (typeof element === "string") {
      if (element.length > stringLength) {
        stringIndex = index;
        stringLength = element.length;
      }
    }
  });

  return lunchArray[stringIndex];
};
let lunchArray1String = ["Burger  Salad  Lasagna Sushi  Meatloaf"];

let longestString = longestStringFromArray();
console.log(longestString);

///B

function oddPositions(numbers) {
  let odd = numbers.filter((num, i) => i % 2 == 1);
  console.log(odd);
}

oddPositions([1, 2, 3, 4, 5, 6]);

///C
let numberList = [];

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  if (numberList[n] > 0) return numberList[n];
  return (numberList[n] = factorial(n - 1) * n);
}
console.log(factorial(5));

///D

function betterHabits(mpg) {
  if (mpg <= 10) {
    console.log("Gas Guzzler");
  } else if (mpg >= 11 && mpg <= 16) {
    console.log("Planet still frowns upon this, and so does your wallet");
  } else if (mpg >= 17 && mpg <= 20) {
    console.log("it's palpable");
  } else if (mpg >= 21 && mpg <= 29) {
    console.log("Atmosphere smiles at your decision");
  } else if (mpg >= 30 && mpg <= 35) {
    console.log("Not many gas stops will be taken");
  } else if (mpg === 120) {
    console.log("The fish of the sea smile at your conservation");
  } else if (mpg > 35) {
    console.log("if you're using the Tom Ogle fuel system, props");
  }
}
betterHabits(7);
betterHabits(15);
betterHabits(25);
betterHabits(35);
betterHabits(36);
betterHabits(120);
