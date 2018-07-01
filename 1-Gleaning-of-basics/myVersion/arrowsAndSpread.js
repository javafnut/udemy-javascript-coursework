

///////////// let try some arrow function



// Can do this only 1 param
const callMe = name => {
    console.log(name);
}

const callMe2 = (name) => {
    console.log(name);
}

callMe('Test....');
callMe2('Test2....');

const multiLineParam = (name,x,y) => {

    let rslt = x * y;
    return name + " : " + rslt;

}

console.log(multiLineParam('Sam',3,4));
console.log(multiLineParam('',3,4));


//======================= spread ==========================================


// append/prepend arrays
const array1 =  [1,2,4,5];
const prepend = [...array1,'Foo','bar'];
const append = ['one','two',...array1];
console.log(prepend);
console.log(append);




// add fields to objects

const obj = {
    who: 'Foo',
    old: '23'
}

const obj2 = {
    what : 'WTF',
    ...obj
}

console.log(obj2);

// Deconstruct..................................

const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]

const myArray = ['first','second','third'];
const [first,second] = myArray;
console.log(first + ' : ' + second);

// Revisit spread & destructure after classes are nailed down better