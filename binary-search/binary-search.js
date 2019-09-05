'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  // if (array.length > 1) {
  //   let mid = Math.ceil(array.length / 2);
  //   console.log(mid);
  //   let left = array.slice(0, mid);
  //   let right = array.slice(mid);
  //   console.log(left);
  //   console.log(right);
  //   if (target <= left[left.length - 1]) {
  //     return binarySearch(left, target);
  //   } else {
  //     return binarySearch(right, target);
  //   }
  // } else {
  //   console.log(array[0]);
  //   if (target === array[0]) {
  //     console.log('trueeeee');
  //     return true;
  //   } else {
  //     console.log('falseeee');
  //     return false;
  //   }
  // }

  //ExtraCredit
  if (array.length > 1) {
    let mid = Math.ceil(array.length / 2);
    if (array[mid - 1] <= target) {
      //left
      mid = Math.ceil(mid / 2);
      if (array[mid - 1] <= target) {
      }
    } else {
      //right
      mid = mid + Math.ceil(mid / 2);
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
