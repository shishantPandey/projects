window.onload = () => {
	let three = document.getElementById("three");
	let two = document.getElementById("two");
	let one = document.getElementById("one");
	let main = document.getElementById("main");
	let kkk = document.getElementById("kkk");
	two.classList.add("none");
	one.classList.add("none");
	main.classList.add("none");
	kkk.classList.add("flex");

	setTimeout(() => {
		three.classList.add("none");
		two.classList.remove("none");
		two.classList.add("block");
	}, 1000);
	setTimeout(() => {
		two.classList.add("none");
		two.classList.remove("block");
		one.classList.add("block");
		one.classList.remove("none");
	}, 2000);
	setTimeout(() => {
		one.classList.add("none");
		one.classList.remove("block");
		main.classList.replace("none", "flex");
		kkk.classList.replace("flex", "none");
	}, 3000);
};

let namep = prompt("enter your name");
let nam = namep.toLocaleUpperCase();
const questions = [
	{
		que: "____ is not a philosopher ",
		a: "Rousseau",
		b: "Voltaire",
		c: "lenin",
		d: "Socrates",
		correct: "c",
	},
	{
		que: "what is the sum of -36 and -44",
		a: "80",
		b: "-80",
		c: "-44",
		d: "36",
		correct: "b",
	},
	{
		que: "why can't we see anything in a dark room?",
		a: "Because every thing is black",
		b: "because light doesn't reaches to our eyes",
		c: "our eyes do not work in darkness",
		d: "all is possible",
		correct: "d",
	},
	{
		que: "what is the another name of munda tribe",
		a: "birsa munda",
		b: "hawkers",
		c: "horoko",
		d: "none of the above",
		correct: "c",
	},
	{
		que: "[my brothers works in ISRO]what is wrong in this sentence ",
		a: "my",
		b: "in",
		c: "works",
		d: "every thing is correct",
		correct: "c",
	},
];

let index = 0;
let total = questions.length;
let right = 0,
	wrong = 0;
const quesbox = document.getElementById("quesbox");
const optioninput = document.querySelectorAll(".options");
const loadquestion = () => {
	if (index === total) {
		return endquiz();
	}
	reset();
	const data = questions[index];
	console.log(data);
	quesbox.innerText = `${index + 1}) ${data.que}`;
	optioninput[0].nextElementSibling.innerText = data.a;
	optioninput[1].nextElementSibling.innerText = data.b;
	optioninput[2].nextElementSibling.innerText = data.c;
	optioninput[3].nextElementSibling.innerText = data.d;
};
loadquestion();
const submitquiz = () => {
	const data = questions[index];
	const ans = getanswer();
	if (ans === data.correct) {
		right++;
		console.log(ans);
		console.log(data.correct);
	} else {
		wrong++;
	}
	time = 0;
	index = index + 1;
	loadquestion();
	return;
};

const getanswer = () => {
	let answer;
	optioninput.forEach((input) => {
		if (input.checked) {
			answer = input.value;
		}
	});
	return answer;
};

function reset() {
	optioninput.forEach((input) => {
		input.checked = false;
	});
}

let time = 0;
setInterval(() => {
	time++;

	if (index != total) {
		document.getElementById("time").innerText = time;
	}
	if (time == 15) {
		time = 0;
		const data = questions[index];
		const ans = getanswer();
		if (ans === data.correct) {
			right++;
		} else {
			wrong++;
		}
		index++;
		loadquestion();
		return;
	}
}, 1000);
function endquiz() {
	document.getElementById("time").innerText = "";
	document.getElementById("box").innerHTML = `
<h3> hey  ${nam} thanks for playing the quiz</h3>
<h2>${right} / ${total} are correct
please take a screenshot and share it in group 
( YOUR FRIEND SHISHANT)
`;
}
