'use strict';
console.log('Problem 1: ');

let xify = str => {
  let newStr = "";

  for(let i = 0; i < str.length; i++) {
    newStr += 'x';
  }
  return newStr;
}

console.log(xify('What time is it?'));

console.log('\n');
console.log('Problem 2: ');

let yellingChars = str => {
  let newStr = "";

  for(let i = 0; i < str.length; i++) {
    newStr += str[i] + '!';
  }
  return newStr;
}

console.log(yellingChars('hello'));

console.log('\n');
console.log('Problem 3: ');

let indexedChars = str => {
  let newStr = "";

  for(let i = 0; i < str.length; i++) {
    newStr += [i] + str[i];
  }
  return newStr;
}

console.log(indexedChars('hello'));

console.log('\n');
console.log('Problem 4: ');

let exclaim = (str) =>{
  let newStr = "";

  for(let i = 0; i < str.length; i++) {
    
    if(str[i] === "?" || str[i] === "."){
      newStr += '!';
    }else{
      newStr += str[i];
    }

  }
  return newStr;
}

console.log(exclaim('What are you doing? Are you a fool? Not me.'));

console.log('\n');
console.log('Problem 5: ');

let truncate = str => {
  let newStr = "";

    for(let i = 0; i < 15; i++) {
      newStr += str[i];
  }
  
  return newStr + '...';
}

console.log(truncate("What are you doing? Are you a fool?"))

console.log('\n');
console.log('Problem 6: ');

let ciEmailify = str => {
  let newStr = "";

  for(let i = 0; i < str.length; i++) {
    if(str[i] === ' '){
      newStr += ".";
    } else{
      newStr += str[i];
    }
  }
  return newStr = newStr.toLowerCase() + "@codeimmersives.com";
}

console.log(ciEmailify('Kevin Bandison'))

console.log('\n');
console.log('Problem 7: ');

let reverse = str => {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverse('Kevin Bandison'));

console.log('\n');
console.log('Problem 8: ');

let onlyVowels = str => {
  let newStr = "";

  for (let i = 0; i < str.length; i++){
    if (str[i] === 'a' || str[i] === 'A'){
      newStr += str[i];
    } else if (str[i] === 'e' || str[i] === 'E'){
      newStr += str[i];
    } else if (str[i] === 'i' || str[i] === 'I'){
      newStr += str[i];
    } else if (str[i] === 'o' || str[i] === 'O'){
      newStr += str[i];
    } else if (str[i] === 'u' || str[i] === 'U'){
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(onlyVowels('Colin Jaffe'));

console.log('\n');
console.log('Problem 8: ');

let crazyCase = str => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if ([i] % 2 !== 0) {
      newStr += str[i].toUpperCase();
    } else{
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(crazyCase('multiple words here'));

