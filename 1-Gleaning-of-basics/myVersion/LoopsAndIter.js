//


// loops
//
// for (let i = 0; i < 10;i++){
//     console.log(i);
// }
//
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
//
// let iter = nums.length;
// for (let i = 0; i <= iter; i++){
//     console.log(i);
// }
//
//
// for (let i = 0; i <= nums.length; i++){
//    console.log(i);
// }

let i = 0;
while (i < nums.length) {
    console.log(nums[i++]);
    //i++;
}

// mix types, print checks
let array = [1, 2, 'tj', 'tom', 'bob', 12, true, false, 'Here'];


// prints everything but strings
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
        continue;
    }
    console.log(array[i]);
}

// stops on boolean
for (let i = 0; i < array.length; i++) {


    if (typeof array[i] === 'boolean') {
        break;
    }

    console.log(array[i]);
}


// continue and break



