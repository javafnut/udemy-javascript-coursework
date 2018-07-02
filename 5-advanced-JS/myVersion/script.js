
// Object create

var fooProto = {
    sayFoo : function(){
        console.log(name + ' your ' + msg);
    }
}

var tj = Object.create(fooProto);
tj.name = 'tj';
tj.msg = ' A SW Engineer';

console.log(tj);


/// ORRRRRRRRRRRRRRRRRRRRRRRRRR



var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

// Object.create allows for more complex object construction than function constructor

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

var fooProto = {
    sayFoo : function(){
        console.log(name + ' your ' + msg);
    }
};

var tj = Object.create(fooProto,{
    name : {value: 'Todd'},
    msg : {value: 'message'}

});

// primitives vs objects for functions


