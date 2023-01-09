let str = "";
let his = ["1+2=3", "10+21=31", "12*4=48", "100-12=88", "100*3=300"];
let x = -1;
let xx = 1;
let a = document.querySelectorAll(".btn");
let ans = document.getElementById("ans");
console.log(a);

Array.from(a).forEach((e) => {
	e.addEventListener("click", () => {
		if (e.value == "c") {
			his.unshift(ans.value);
			ans.value = "";
			str = "";
		} else if (e.value == "=") {
			str = str + e.value + eval(str);
			ans.value = str;
			console.log();
		} else if (e.value == "undo") {
			x++;
			x--;
			ans.value = his[x];
		} else if (e.value == "redo") {
			xx++;
			ans.value = his[his.length - xx];
		} else {
			console.log(e.value);
			str = str + e.value;
			ans.value = str;
		}
	});
	p;
});
