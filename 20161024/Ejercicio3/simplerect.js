// V.1
/*var rect = {
	perimeter:function(x, y){
		return (2 * (x+y));
	},
	area:function(x, y){
		return (x * y);
	},
}*/

//var rect = require('./rectangle'); // V.2
var rect = require('./rectangle2'); // V.3

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

solveRect(12,10);
solveRect(-1,5);
solveRect(1,8);