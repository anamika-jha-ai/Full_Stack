//question1 (function that returns array elements larger than an number)

let arr = [2, 8, 5, 3, 0, 4, 1, 7, 6];
let num = 3;

function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);




//question 2 (function to extract unique characters from string)

let str = "aanammmikaaajhaa";

//function get string with all unique elements
function getUnique(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        let currchar = str[i];
        if (ans.indexOf(currchar) == -1) {
            //if current char is not addes, then ad it in ans
            //otherwise it is a duplicate
            ans += currchar;
        }
    }
    return ans;
}
getUnique(str);




//question 3 (function to acepts a list of country names as input returns the longest contry name)

let country = ["Australia", "Germany", "USA"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;

        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(longestName(country));




//question 4 ( to count the number of vowels in a string argument)

let string = " anamikajha";

function countvowels(str){
    let count = 0 ;
    for( let i = 0 ; i <str.length; i++){
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ){
            count++;
        }
    }
    return count;
}
console.log(countvowels(string));



//question 5 (generate a random number within a range)

let start = 100;
let end = 110;

function generateRandom(start, end){
    let diff = end - start;
    return Math.floor(Math.random()* diff) + start;
}
console.log(generateRandom(start, end));