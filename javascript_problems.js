// Sum of all numbers in a range

function sumAll(arr) {
total = 0;  
var min = Math.min(...arr);
var max = Math.max(...arr);
  for(i= min; i <= max; i++) {
    total += i;
  }
return total;
}
sumAll([1, 4]);

// Return largest numbers in arrays

function largestOfFour(arr) {
    max_array = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < 1; j++) {
       max_array.push(Math.max.apply(null, arr[i]));
    }
  }
  return max_array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/* Return true if the string in the first 
element of the array contains all of the letters of the 
string in the second element of the array. */

function mutation(arr) {

   var str2 = arr.splice(1).toString().toLowerCase();
   var str1 = arr.toString().toLowerCase();
  for(var i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"], "");

/* You will be provided with an initial array (the first argument 
in the destroyer function), followed by one or more arguments. Remove 
all elements from the initial array that are of the same value as these arguments. */

function destroyer(arr) {
  return [].slice.call(arguments, 1).reduce(function(arr, num) {
    return arr.filter(function(item) {
      return num !== item;
    });
  }, arr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");

// Difference of two arrays

function diff(arr1, arr2) {
  newArray = arr1.concat(arr2)
  
  function track(i) {
      if (arr1.indexOf(i) === -1 || arr2.indexOf(i) === -1) {
          return i;
      }
  } 
  
  return newArray.filter(track)
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Pig Latin

function translate(str) {
  var pig = '';
  var vowels = /[aeiou]/gi;
  
  if (str[0].match(vowels)) {
    return str + 'way';
  } else {
    var firstVowel = str.indexOf(str.match(vowels)[0]);
    pig = str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay';
    return pig;
  }
}

translate("consonant");

// DNA Pairing

function pair(str) {
 var finalDNA = [];
 dnaMatch = function(dna) {
   switch (dna) {
     case 'G':
       finalDNA.push(["G", "C"]);
       break;
      case 'C':
       finalDNA.push(["C", "G"]);
       break;
     case 'A':
       finalDNA.push(["A", "T"]);
       break;
      case 'T':
       finalDNA.push(["T", "A"]);
       break;
   }
 }

  for (var i =0; i < str.length; i++) {
    dnaMatch(str[i]);
  }
  
  return finalDNA;
 
}

pair("ATCGA");

// Find missing letter in passed letter range

function fearNotLetter(str) {
    
    for (var i = 0; i < str.length; i++) {
          
          var bit = str.charCodeAt(i);
              
              if (bit !== str.charCodeAt(0) + i) {
                      return String.fromCharCode(bit - 1);
                          }
                }

      return undefined;
}

fearNotLetter("abce");

// Check if value is boolean or primative

function boo(bool) {
  if (typeof(bool) === "boolean") {
    return true;
  } else {
    return false;
         }
  }
boo(null);

// Find unique values of two arrays

function unite(arr1, arr2, arr3) {
    newArray = [];
      
      for (var i = 0; i < arguments.length; i++) {
            var arrLength = arguments[i];
                
                for (var j = 0; j < arrLength.length; j++) {
                        var indexValue = arrLength[j];

                              while (newArray.indexOf(indexValue) < 0) {
                                        newArray.push(indexValue);
                                              }
                                  }
                  }
        
        return newArray;
}

unite([1, 3, 2], [1, [5]], [2, [4]]);

// Convert HTML Entities

function convert(str) {
  var new_str = str.split('');
  
  for (var i = 0; i < new_str.length; i++) {
       switch (str[i]) {
         case "&":
           new_str[i] = "&amp;";
         break;
         case "<":
           new_str[i] = "&lt;";
         break;
         case ">":
           new_str[i] = "&gt;";
           break;
         case '"':
           new_str[i] = "&quot;";
           break;
         case "'":
           new_str[i] = "&apos;";
         break;
       }
    
       }
  return new_str.join('');
}

convert("Dolce & <Gabbana");

// Switch case to use hyphens

function spinalCase(str) {
  var new_str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return new_str.replace(/[\s_]/gi, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');