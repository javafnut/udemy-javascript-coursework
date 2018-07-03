// Objects and methods


// simple

var foo = {
    firstPart: 'foo',
    lastPart: 'bar',
    sinceYear: 1962,
    intArray: [1, 2, 3, 4],
    isFubar: true,
    howLong: function () {
        this.year = 2018 - this.sinceYear;    // adds field inside of function
        return this.year;
    }
}

foo.year = 20;
console.log(foo);
console.log(foo.howLong());

var bmi = {
    fullName: 'Todd',
    mass: 230,
    height: 74,
    caclBmi: function () {
        return (this.mass / (this.height * this.height));
    }
}

console.log(bmi.fullName + ' = ' + bmi.caclBmi());
