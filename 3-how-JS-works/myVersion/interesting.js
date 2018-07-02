// assume note could be running in browser


console.log(this); // ide ={},
// browser = Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}



let fooBar = {
    sayFoo : 'FOO',
    sayBar : ' Bar',
    howLong: 100,
    dump : function(){
        console.log(this); // Dumps this object
        console.log(this.foo + this.bar); // as expected

        function innerFunction(){
            console.log(this);   // will dump parent object to temp
        }

        innerFunction();
    }

}

console.log(fooBar);

/*  results
{ sayFoo: 'FOO',
  sayBar: ' Bar',
  howLong: 100,
  dump: [Function: dump] }   // IDE
  _proto // Browser
 */

  // method borrowing

  let test = {
      x : 10,
      y : 2,
      mult : function(){
         console.log('Result => ' +  this.x * this.y);
      }
  }

  test.mult();

  let doit = test.mult();
  doit.mult();

