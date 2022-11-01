const cards = [ 'Guadalupe', 'Ollie', 'Aki' ];
function writeCards(cards, event) {
    let newArr = []
  for (let i = 0; i < cards.length; i++) {
    newArr.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
  }

  return newArr;
}

writeCards(cards);

function countDown(){
    let countDown = 0;
    while (countDown < 11) {
        console.log(countDown ++);
    }
}