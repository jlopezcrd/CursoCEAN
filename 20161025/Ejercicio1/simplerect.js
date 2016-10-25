var argv = require('yargs')
	.usage('Usage: node $0 --l=[num] --b=[num]')
	.demand(['l', 'b'])
	.argv;

var rect = require('./rectangle2')

function solveRect(l, b) {
	rect(l,b,function(err,rectangle){
		if(err) {
			console.log("Ha ocurrido un error: " + err);
		} else {
			console.log("Area: " + rectangle.area());
			console.log("Perimeter: " + rectangle.perimeter());
		}
	});
}

solveRect(argv.l, argv.b);