function isPalindrome(word) {
  // Write your algorithm here
  // remove all non-alphanumeric characters and convert to lowercase
  word= word.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // compare the string to its reversed version
  return word === word.split('').reverse().join('');

}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 
/* 
  Add your pseudocode here
  1. Create a new variable called `cleanedWord` and assign it the value of the input word with all non-alphanumeric characters removed and converted to lowercase
2. Create a new variable called `reversedWord` and assign it the value of `cleanedWord` reversed
3. If `cleanedWord` is the same as `reversedWord`, return `true`
4. Otherwise, return `false`
  

*/

/*
  Add written explanation of your solution here
 1. We remove all non-alphanumeric characters from the input word and convert it to lowercase. This is to ensure that the function is case-insensitive and ignores any non-alphanumeric characters in the word.
2.We create a new variable called reversedWord and assign it the value of cleanedWord reversed. We can do this by splitting the word into an array of characters using the split method, reversing the array using the reverse method, and then joining the array back into a string using the join method.
3.We check if cleanedWord is the same as reversedWord. If it is, then the word is a palindrome and we return true.
4.If cleanedWord is not the same as reversedWord, then the word is not a palindrome and we return false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
