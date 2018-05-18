const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  reader.question("Pick a number: ", (response) => {
    let num = parseInt(response);
    sum += num;
    console.log(sum);
    numsLeft--;
    if (numsLeft > 0) {
      addNumbers(sum, numsLeft, completionCallback);
    } else {
      completionCallback(sum);
      reader.close();
      return;
    }
  });
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function absurdBubbleSort(arr, sortCompletionCallback) {
  let i = 0;

  outerBubbleSortLoop = function(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, i, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };

  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? (y/n) ? `, (response) => {
    response === 'y' ? callback(true) : callback(false);
  });
}

// askIfGreaterThan(1,3, function(response) { console.log(response) });

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
      let el1 = arr[i];
      let el2 = arr[i + 1];

      askIfGreaterThan(el1, el2, (boolean) => {
        if ( boolean === true ) {
          [arr[i + 1], arr[i]] = [el1, el2];
          madeAnySwaps = true;
        }
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
      });
    } else {
      outerBubbleSortLoop(madeAnySwaps);
    }
}



// innerBubbleSortLoop([3,2,5,9,11,10], 0, false, outerBubbleSortLoop);
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
