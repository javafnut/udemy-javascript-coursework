
/*************************************************
 * Function Statements and Expressions
 */
var job = 'Foo';
var name = 'Bar';


// Declaritive
function myFunc(job,name){
    return name + '::' + job;
}

console.log(myFunc(job,name));

// function expression
var functStmt = function(job,name) {
    return name + ':' + job;
}

console.log(functStmt(job,name));

// Switch Example

var whatYouDo = function(job,firstName){

    switch (job){

        case 'teacher' :
            return firstName + ' I teach';

        case 'soldier' :
            return 'I kill terrorists - ' + firstName;

        case true :
            return 'Passes truth - ' + firstName;

        case false :
            return 'Passes false - ' + firstName;

    }
}

console.log(whatYouDo('teacher','Lori'));
console.log(whatYouDo('soldier','Todd'));
console.log(whatYouDo(true,'Ha Ha'));
console.log(whatYouDo(false,'Ha Ha'));


/// Arrays.....
var names = ['Todd','Dave','Lori'];
var years = new Array(1990,1969,1950);

console.log(names);

console.log(names.length);

console.log(names[0]);

console.log(names[1] = 'Mike');
console.log(names);

console.log(names[names.length] = 'Append');
console.log(names);


// goofing around a bit
var tmp = names;

for (var i = 0; i < 10; i++){
    tmp[tmp.length] = 'Appended - ' + i;
}
console.log(tmp);

// to append
console.log(names.push('Added to last')); //append
console.log(names);

console.log(names.unshift('Added to first')); // prepend
console.log(names);


console.log(names.pop()); // remove last
console.log(names);

console.log(names.shift()); // removes first
console.log(names);

console.log(names.indexOf('Lori'));

// using ternary
console.log(names.indexOf('Not In Array') === -1 ? 'Not in Array' : 'In The Array');
console.log(names.indexOf('Todd') !== -1 ? 'Todd is In The Array' : 'Not in the Array');


// Coding Challenge

// Amount spent at restaurants

var spent = [124,48,268];
var tips = [];
var totals = [];


console.log('Coding challenge tips & totals');
for (var i = 0; i < spent.length; i++)
{

    if (spent[i] < 50) {
        tips.push(spent[i] * .20);
        totals.push(tips[tips.length - 1] + spent[i]);
    }

    console.log(tips);
    console.log(totals);
}


}

