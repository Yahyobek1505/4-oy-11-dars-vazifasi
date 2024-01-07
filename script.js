// //<===============================> 1-masala <===============================>

// let sozlar = "Najot Ta'lim, Javascrip, bolajon";

// function string(arg) {
//     let massiv = arg.split('');
//     let massivSoz = massiv.reverse();
//     let harflar = massivSoz.join('');

//     return harflar;
//   }

//   console.log(string(sozlar));

// //<===============================> 2-masala <===============================>

// let uzunGap = "Javascript is the best web programming language!";

// function string(arg) {
//     let sozlar = arg.split(' ');
//     let uzunSoz = '';

//     for (let i = 0; i < sozlar.length; i++) {
//       if (sozlar[i].length > uzunSoz.length) {
//         uzunSoz = sozlar[i];
//       }
//     }

//     return uzunSoz;
//   }

//   console.log(string(uzunGap));

// //<===============================> 3-masala <===============================>

// let unliGap = "unlilar nechta ekan?";
// let unlilar = unliGap.split("");
// let unliHarflar = ["a", "i", "o", "e", "u"];
// let counter = 0;

// function unliSana(arg) {
//     for (const value of unlilar){
//         if(unliHarflar.indexOf(value) != -1){
//             counter++
//         }
//     }
//     return counter
// }

// console.log("Unlilar soni " + unliSana(unliGap) + " ta");

// //<===============================> 4-masala <===============================>

// function Ispalindrom(soz) {
//   let kichikHarf = soz.toLowerCase();
// let teskariYoz = kichikHarf.split('').reverse().join('');
//   return kichikHarf === teskariYoz;
// }
// let soz1 = "Alla";
// let result = (Ispalindrom(testSoz1));
// // console.log(result);
// if (result == true) {
//   console.log(soz1 + " - bu so'z palindrom!");
// } else {
//   console.log(soz1 + " - bu so'z palindrom emas!");
// }

// //<===============================> 5-masala <===============================>

// let array = ["a", "b", "c", "d", "e",  "d", "e", "a", "f"];

//    function olibTashla(arr) {
//     let newArr = [];
//     for (let i of arr) {
//         if (newArr.indexOf(i) === -1) {
//             newArr.push(i);
//         }
//     }
//      return newArr
// }

// console.log(olibTashla(array));
