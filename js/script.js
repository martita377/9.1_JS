
// Triangle Area - JS

var triangle1Area = getTriangleArea(15,6);
var triangle2Area = getTriangleArea(10,1);
var triangle3Area = getTriangleArea(1,1);

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		alert('Nieprawidłowe dane');
	} else {
		showResult(a, h);
	}
}

function showResult(a, h) {
	document.getElementById('result').value = calculate(a, h);
}

function calculate(a, h) {
	return (a * h) / 2;
}


console.log(calculate(10, 2));