/*
დაწერეთ ფუნქცია რომელიც შეამოწმებს გადაცემული ტექსტი არის თუ არა პალინდრომი . 
პალინდრომი არის სიტყვა რომელიც შებრუნებულ მდგომარეობაშიც იგივეა . მაგ. madam - მარცხნიდანაც და მარჯვნიდანაც ერთი და იგივეა(შებრუნებულიც და ჩვეულებრივადაც) .

function palindrom(txt) {

}

*/

function palindrom(txt) {
    let araytxt = txt.split('')
    let reversArr = araytxt.reverse();
    let reversTxt = reversArr.join('')
    let answer = ''
    if(reversTxt===txt){
      answer += 'It is Palidorme'
      
    }else answer += 'It is not Palidorm'
    return answer;
  }
  
  console.log(palindrom('txt'));

//Task 2

/*
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს პირველ არაგამეორებადი ქარაქტერი/სიმბოლოს. 
მაგალითად გვაქვს string 'bcskbrk' -> c - პირველი არაგამეორებადი ქარაქტერი არის 'c'
'cbcbdde' -> 'e'
'worsdorw' -> 's' 
'worsdorws'-> 'd'


*/

function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
      let arr = string.split('');
      if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
          console.log('პირველი არაგამეორებადი ქარაქტერი არის '+ arr[i]);
          break;
      }
    }
  }
  
  let someString = 'jsdjd';
  firstNonRepeatedCharacter(someString);

/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც გადაცემულ ტექსტის camelCase ში კონვერტაციას გააკეთებს
camelize("sad midis Matarebeli") -> "sadMidisMatarebeli"

*/

let text = "sad midis matarebeli?"
function firsLetterToUpper(word){
    return word.charAt(0).toUpperCase() + word.substring(1);
}
let bigLetterArr = text.split(" ");
let newText = bigLetterArr.reduce((acc,cur)=>{
    acc = acc + firsLetterToUpper(cur) + " ";
    return acc;
}, "");
console.log(newText.trim());

/*
Task 4: 
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს რიცხვს სწორი სუფიქსით , როგორიცაა 1st, 2nd, 3rd or 4th და ა.შ

მაგ . normilize(121) -> '121st' 
normilize(124) -> '124th' 
normilize(33) -> '33rd' 
    

*/

function normalize(num){
    let string = num.toString();
    if(string.charAt(string.length-1)==1){
        return string+= "st"
    } else if(string.charAt(string.length-1)==2){
        return string += "nd"
    }else if(string.charAt(string.length-1)==3){
        return string += "rd"
    }else{
        return string += "th"
    }
}
console.log(normalize(11));

//Task 5

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 let newArray =arr1.slice().sort();
 let most = [undefined,0];
 let counter = 0;
 newArray.reduce(function(acc,val){
    acc == val ? ++counter > most[1] && (most = [val, counter]) : (counter = 1)
    return val 
 })
console.log(`${most[0]} - ${most[1]} times `);

/*
Task 6 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

შედეგი უნდა იყოს : [1,1,2,2,3,30]

*/

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
function filterArray(arrayOne,arrayTwo){
    return [...new Set(arrayOne.concat(arrayTwo))];
}
console.log(filterArray(array1,array2));
function resultArray(arrayOne,arrayTwo){
    let result = [...arrayOne,...arrayTwo];
    result.sort(function(a,b){
        return a - b;
    })
    return result;
}
console.log(resultArray(array1,array2));

/*
Task 7 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

*/

function readyToPutInTheDOM(arr) {
    return arr.map(function(arrI){
        return `<h1>${arrI.name}</h1><h2>${arrI.age}</h2>`
    })
  }
  console.log(
    readyToPutInTheDOM([
      {
        name: "Angelina Jolie",
        age: 80,
      },
      {
        name: "Eric Jones",
        age: 2,
      },
      {
        name: "Paris Hilton",
        age: 5,
      },
      {
        name: "Kayne West",
        age: 16,
      },
      {
        name: "Bob Ziroll",
        age: 100,
      },
    ])
  );
  
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
  
  /* Task 8 */ ///Optional
  
  /* 
    გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
    პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
    მეზობელი ელემენტების სხვაობების ჯამი . 
    მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
    შემდეგ  (10-2) + (2-1) = 8 + 1 = 9
  
    სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
    პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .
  
  
  
    */