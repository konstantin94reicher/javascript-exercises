// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements.

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let rdmIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[rdmIndex]] = [array[rdmIndex], array[i]];
  }
}

let arr = [1, 2, 3, 4];

shuffle(arr);
console.log(arr);
