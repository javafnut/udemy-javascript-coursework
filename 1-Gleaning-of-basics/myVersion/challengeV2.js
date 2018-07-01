

// Try this with some functions and tenenary's
// just for fun.... need to get a life

const greaterThan = function(val,chk, orEqual){

    if (!orEqual) {
        return val > chk ? true : false;
    } else {
        return val >= chk ? true : false;

    }
}

const lessThan = function(val,chk, orEqual){

    if (!orEqual) {
        return val < chk ? true : false;
    } else {
        return val <= chk ? true : false;

    }
}

console.log('Coding challenge tips & totals');


let john = {
    fullName  : 'John Smith',
    spent  : [124, 48, 268, 128],
    calTips: function () {
        this.tips = [];
        this.totals = [];
        this.results = [];

        for (let i = 0; i < this.spent.length; i++) {
            if (lessThan(this.spent[i],50)) {
                this.tips[i] = this.spent[i] * .20;
            }
            else if (greaterThan(this.spent[i],50,true) && lessThan(this.spent[i],200)) {
                this.tips[i] = this.spent[i] * .15;

            } else {
                this.tips[i] = this.spent[i] * .10;
            }

            // Calcuate totals
            this.totals[i] = (this.spent[i] + this.tips[i]);
            this.results[i] = this.fullName + ' Results: Bill -> $'
                + this.spent[i] + ' Tip -> $' + this.tips[i].toFixed(2)
                + ' Total -> $' + this.totals[i].toFixed(2);
        }
       // return this.fullName + ' Results: Bill -> ' + this.spent + ' Tip -> ' + tips[i] + ' Total -> ' + totals[i];

        return this.results;
    }
};

const data = john.calTips();
console.log(data);



