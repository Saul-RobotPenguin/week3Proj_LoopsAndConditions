//1)
function nums1To10() {
  for (x = 1; x < 11; x++) {
    console.log(x);
  }
}
nums1To10();

//2)
function outputOddNums() {
  x = 3;
  let oddNumbers = [];
  while (x <= 103) {
    if (x % 2 === 1) {
      oddNumbers.push(x);
      x++;
    } else {
      x++;
    }
  }
  console.log(oddNumbers);
}

outputOddNums();

//3)
function arraySum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
}
arraySum([1, 2, 3, 4, 5, 6]);

//4)
function downFrom9() {
  x = 9;
  while (x >= 0) {
    console.log(x);
    x -= 1;
  }
}
downFrom9();

//5)
let numberList = [];
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  if (numberList[n] > 0) return numberList[n];
  return (numberList[n] = factorial(n - 1) * n);
}
console.log(factorial(5));

//6)
function fromN(n) {
  for (i = 1; i < n + 1; i++) {
    console.log(i);
  }
}
fromN(4);

//7
function every2ndLetterIsZ(word) {
  let wordInArrayForm = Array.from(word);
  for (i = 1; i < word.length; i += 2) {
    if (wordInArrayForm[i] != "Z") {
      wordInArrayForm[i] = "Z";
    } else {
      console.log("Done?");
    }
  }
  let wordJoinedBackToStringForm = wordInArrayForm.join("");
  console.log(wordJoinedBackToStringForm);
}
every2ndLetterIsZ("donuts");
