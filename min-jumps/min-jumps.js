'use strict';

// Complete this algo
const minJumps = arr => {
  let start = 0
  let nummove = arr[start]
  let max = arr[start+1]
  let end = arr.length - 1
  while(){
    for(i = start; i<start+nummove-1 ; i++ ){
      if(max < arr[i+2]){
        max = arr[i+2]
        nummove = arr[i+2]
        start = i+2
      }
    }
  }
};

module.exports = minJumps;
