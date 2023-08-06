// Code your solutions
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const gifters =[ "Guadalupe", "Ollie" , "Aki"]
function writeCards(gifters , surprise) {
  const message =[]
  for (let i = 0; i < gifters.length; i++) {
    message.push(`Thank you, ${gifters[i]}, for the wonderful ${surprise} gift!`);;
  }
  return message
}
writeCards(gifters, 'surprise')

// function countDown(numbers){
//   console.log(numbers);
//   let countDown = 10;
//   while (countDown < 10) {
//     console.log(`Hello its me ${numbers}` );countDown++
// }
// return numbers
// }
function countDown() {
  let countup = 10;
  while (countup >= 0) {
    console.log(countup--);
  }
}
countDown()