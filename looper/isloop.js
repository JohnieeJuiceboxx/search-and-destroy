'use strict';

//Complete this algo
const isLoop = linkedlist => {
  const container = [];
  // console.log(linkedlist);
  let temp = linkedlist.head;

  while (!container.includes(temp.value)) {
    if (temp.next === null) {
      return false;
    }
    container.push(temp.value);
    // console.log(container);
    temp = temp.next;
  }
  return true;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
