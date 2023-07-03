const quoteStart = ["I am", "Today", "My"];
const quoteEnd1 = ["Strong", "Smart", "Successful", "Funny", "Powerful", "goodlooking"];
const quoteEnd2 = ["is a phenomenal day", "will be a productive day"];
const quoteEnd3 = [
  "life has meaning. What I do has meaning. My actions are meaningful and inspiring.",
  "soul radiates from the inside and warms the souls of others", "life has purpose", "life has meaning"
];

function randomWord() {
  const index1 = Math.floor(Math.random() * quoteStart.length);
  let index2;
  let selectedArray;

  switch (index1) {
    case 0:
      selectedArray = quoteEnd1;
      index2 = Math.floor(Math.random() * quoteEnd1.length);
      break;
    case 1:
      selectedArray = quoteEnd2;
      index2 = Math.floor(Math.random() * quoteEnd2.length);
      break;
    case 2:
      selectedArray = quoteEnd3;
      index2 = Math.floor(Math.random() * quoteEnd3.length);
      break;
    default:
      console.log("Invalid index");
      return;
  }

  const quote = `${quoteStart[index1]} ${selectedArray[index2]}`;
  console.log(quote);
}


randomWord();
