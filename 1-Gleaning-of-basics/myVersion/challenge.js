
// Amount spent at restaurants

// var spent = [124,48,268];
// var tips = [];
// var totals = [];
// var results = [];


console.log('Coding challenge tips & totals');

var john;
john = {
    fullName  : 'John Smith',
    spent  : [124, 48, 268, 128],
    calTips: function () {
        this.tips = [];
        this.totals = [];
        this.results = [];

        for (var i = 0; i < this.spent.length; i++) {
            if (this.spent[i] < 50) {
                this.tips[i] = this.spent[i] * .20;
            }
            else if (this.spent[i] >= 50 && this.spent[i] < 200) {
                this.tips[i] = this.spent[i] * .15;

            } else {
                this.tips[i] = this.spent[i] * .10;
            }

            // Calcuate totals
            this.totals[i] = (this.spent[i] + this.tips[i]);
            this.results[i] = this.fullName + ' Results: Bill -> '
                + this.spent[i] + ' Tip -> ' + this.tips[i].toFixed(2)
                + ' Total -> ' + this.totals[i].toFixed(2);
        }
       // return this.fullName + ' Results: Bill -> ' + this.spent + ' Tip -> ' + tips[i] + ' Total -> ' + totals[i];

        return this.results;
    }
};

var data = john.calTips();
console.log(data);



