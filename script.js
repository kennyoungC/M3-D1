//? 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.
const sumOfTwoInt = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
};
// console.log(sumOfTwoInt(3, 3));
//? 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50.
const checkTwoInts = function (n1, n2) {
  // sum = n1 + n2;
  if (n1 === 50 || n2 === 50 || n1 + n2 === 50) {
    return true;
  } else {
    return false;
  }
};
// console.log(checkTwoInts(25, 25));
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
const removeCharacter = function (str, removedPostion) {
  const toArr = str.split(``);
  return toArr;
};
const newstr = `we are going home soon`;
console.log(removeCharacter(newstr));
//? 4. Create a function to find and return the largest of three given integers.
const returnLargestInt = function (n1, n2, n3) {
  let allNums = [n1, n2, n3];
  return Math.max(...allNums);
};
// console.log(returnLargestInt(3, 2, 7));
/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
const checkNumRanges = function (n1, n2) {
  if (
    (n1 > 40 && n1 <= 60 && n2 > 40 && n2 <= 60) ||
    (n1 > 70 && n1 <= 100 && n2 > 70 && n2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(checkNumRanges(41, 74));
//?  6. Create a function to create a new string composed of a specified number of copies of a given string. Pass the string and the number of copies as parameters.
const createNewStrCopies = function (str, n1) {
  for (let i = 0; i < n1; i++) {
    console.log(str.slice());
  }
};
createNewStrCopies(newstr, 4);
//? 7. Create a function to display the city name if the string begins with "Los" or "New". Pass the city name as a parameter. Return `false` if they start with a different string.
const displayCityName = function (cityName) {
  const lower = cityName.toLowerCase();
  if (lower.startsWith(`los`) || lower.startsWith(`new`)) {
    return cityName;
  } else {
    return false;
  }
};
// console.log(displayCityName(`bayern`));
// console.log(displayCityName(`los angeles`));
// console.log(displayCityName(`netherland`));
// console.log(displayCityName(`New jersey`));
//? 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. Pass the array as a parameter.
const sumOfAllEl = function (array) {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum;
};
console.log(sumOfAllEl([1, 2, 3]));
//?9. Create a function to test if an array of lenght 2 contains 1 OR 3. Return `true` is it does, `false` if it doesn't.
const arrayContainsOneOrThree = function (array) {
  for (const num of array) {
    if (num === 1 || num === 3) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(arrayContainsOneOrThree([1, 5]));
//? 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. Return `true` if it doesn't, `false` if it does.
const arrayNotContainsOneOrThree = function (array) {
  for (const num of array) {
    if (num === 1 || num === 3) {
      return false;
    } else {
      return true;
    }
  }
};
console.log(arrayNotContainsOneOrThree([1, 5]));
// ? 11. Create a function to find the longest string from a given array of strings. Pass the array as parameter and return the longest string. */
const findLongestString = function (array) {
  let longestWord = "";
  array.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};
const strs = [`fish`, `pepper`, `yam`];
console.log(findLongestString(strs));
//? 12. Create a function to find the types of a given angle:
//?  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
//?   2. Right angle â‡’ 90 degree. Return `right`
//?  3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
//? 4. Straight angle â‡’ 180 degrees. Return `straight`
//? Pass the angle as a parameter.

const typeOfaGivenAngle = function (angle) {
  if (angle >= 0 && angle < 90) {
    return `acute angle`;
  } else if (angle === 90) {
    return `right angle`;
  } else if (angle > 90 && angle < 180) {
    return `obtuse angle`;
  } else if (angle === 180) {
    return `straight angle`;
  } else console.log(`please input a value between 0 and 180`);
};
console.log(typeOfaGivenAngle(90));
/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

//? 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
const largestEvenNum = function (array) {
  let even = [];
  array.forEach((num) => {
    if (num % 2 === 0) {
      even.push(num);
    }
  });
  return Math.max(...even);
};
console.log(largestEvenNum([2, 5, 12, 3, 7, 9, 10]));
// ? 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. Return `true` if that's the case, return `false` if it's not.
const checkPositiveAndNegetiveNum = function (n1, n2) {
  if (n1 > 0 && n2 < 0) {
    return true;
  } else if (n2 > 0 && n1 < 0) {
    return true;
  } else if (n1 > 0 && n2 > 0) {
    return false;
  }
};
console.log(checkPositiveAndNegetiveNum(2, 1));
//? 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case.
//?If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
const firstThreeLetterToLower = function (str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    const allStrToLower = str.toUpperCase();
    const firstThreeLetter = allStrToLower.slice(0, 3).toLowerCase();
    return firstThreeLetter + allStrToLower.substring(3);
  }
};
console.log(firstThreeLetterToLower(`texas`));
//? 17. Create a function to calculate the sum of two integers (passed as parameters).
//? If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
const sumOfNumbers = function (n1, n2) {
  sum = n1 + n2;
  if (sum > 50 && sum < 80) {
    return 65;
  } else return 80;
};
console.log(sumOfNumbers(25, 25));
/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

//? 19. Create a function that that takes a phrase as a parameter and returns its acronym.
//? Ex. British Broadcasting Corporation returns `BBC`
const strAcronym = function (phrase) {
  acronym = [];
  const splitedPhrase = phrase.toUpperCase().split(` `);
  for (const eachWord of splitedPhrase) {
    acronym.push(eachWord[0]);
  }
  return acronym.join(``);
};
console.log(strAcronym(`british broadcasting corporation`));
