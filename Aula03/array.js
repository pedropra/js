

var array = ["A", "B", "C", "D", "E", "F","G","H","I","J"]
console.log("Array imprimindo normal");
for (var i=0;array.length>i;i++) {
	console.log(array[i]);
};
console.log("Array imprimindo ao contrário");
for (var i = array.length-1; i >= 0; i--) {
	console.log(array[i]);
}