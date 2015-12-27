// console.log("HELLO ES6");

/*var name = process.argv[2];
var low = name.toLowerCase();
console.log(`Hello, ${name}!`);
console.log(`Your name lowercased is "${low}".`);*/

function name (x) {	return x + 1; } // x => x + 1

var input = process.argv.slice(2);
var result = input.map(x => x[0])
				  .reduce( (old, x) => old + x);
console.log(`[${input}] becomes "${result}"`);







