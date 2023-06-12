/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');
  if(str1.length === str2.length) {
    for(a of str1) {
      let found = false;
      for (b of str2) {
        if(a === b) {
            found = true
            break
        } 
      }
      if(!found) {
          return false
      }
    }
    return true
  } else {
    return false
  }
}

console.log(isAnagram("car", "rac"))
module.exports = isAnagram;
