// 20
function findMiddleNumber(arr) {
  let middleIndex = Math.floor((arr.length - 1) / 2);
  if (arr.length % 2 === 0) {
    return (arr[middleIndex] + arr[middleIndex + 1]) / 2;
  } else {
    return arr[middleIndex];
  }
}

console.log(findMiddleNumber([1, 2, 3, 4, 5]));
console.log(findMiddleNumber([1, 2, 3, 4]));

// 21
// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(11));
// console.log(isPrime(4));

// 22
// function findPowerOfTwo(n, k) {
//   return Math.pow(n, k);
// }

// console.log(findPowerOfTwo(8, 3));

// 23
// function isPerfect(num) {
//   let sum = 0;
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === num;
// }

// console.log(isPerfect(6));
// console.log(isPerfect(28));
// console.log(isPerfect(12));

// 24
// function countDigits(num) {
//   return num.toString().length;
// }

// console.log(countDigits(12345));

// 25
// function countLetterA(str) {
//   let count = 0;
//   for (let char of str) {
//     if (char.toLowerCase() === "a") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetterA("Alphabet"));

// 26
// function findShortestWord(sentence) {
//   let words = sentence.split(' ');
//   let shortest = words[0];
//   for (let word of words) {
//     if (word.length < shortest.length) {
//       shortest = word;
//     }
//   }
//   return shortest;
// }

// console.log(findShortestWord("This is a test sentence"));

// 27

// function checkArgumentType(arg) {
//   if (typeof arg === 'number') {
//     return "son";
//   } else if (typeof arg === 'string') {
//     return "string";
//   }
//   return 0;
// }

// console.log(checkArgumentType(123));
// console.log(checkArgumentType("hello"));
// console.log(checkArgumentType(true));

// 28

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));

// 29
// function countWordsInString(str) {
//   return str.split(' ').length;
// }

// console.log(countWordsInString("This is a test"));
