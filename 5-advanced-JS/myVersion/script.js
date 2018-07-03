// Object create

var fooProto = {
    sayFoo: function () {
        console.log(name + ' your ' + msg);
    }
}

var tj = Object.create(fooProto);
tj.name = 'tj';
tj.msg = ' A SW Engineer';

console.log(tj);


/// ORRRRRRRRRRRRRRRRRRRRRRRRRR


var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

// Object.create allows for more complex object construction than function constructor

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});

var fooProto = {
    sayFoo: function () {
        console.log(name + ' your ' + msg);
    }
};

var tj = Object.create(fooProto, {
    name: {value: 'Todd'},
    msg: {value: 'message'}

});

// primitives vs objects for functions

for (let i = 0; i < 10; i++) {
    let n = i;
    console.log(n);
}

let obj = Object.create({
    a: 'foo'
});

console.log(obj.a);

//// simple call back
let years = [1962, 1999, 2000, 2001, 2012];


function arrayCalc(array, fn) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        results.push(fn(array[i]));
    }

    return results;
}

function calculateAge(el) {
    return 2018 - el;
}

function numberOfDaysLived(el) {

    return Math.round(calculateAge(el) * 365.25);
}

console.log(arrayCalc(years, calculateAge));
console.log(arrayCalc(years, numberOfDaysLived));

//////////////////////////////////////////////////////

// function returning another function

function interviewQuestion(job) {
    if (job === 'programmer') {
        return function (name) {
            console.log(name + ' explain java ?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ' what do you teach ?');
        }
    } else {
        return function (name) {
            console.log(name + ' what is a foobar ?')
        }
    }
}

let teacherQues = interviewQuestion('teacher');

teacherQues('Todd');

// Cool do both at once, 'Todd' is  passed as param
let programmerQuest = interviewQuestion('programmer')('Todd');


// Immediately Invoked Function Expressions (IIFE)

function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}

game();

//IIFE

(function () {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodluck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);
