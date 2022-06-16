//Calculator
function calculator(x, y, o) {
  switch (o) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
      break;
    case "/":
      return x / y;
    default:
      console.log("Enter a valid number");
  }
}

const x = Number(prompt("Enter first number"));
const y = Number(prompt("Enter second number"));

console.log(calculator(x, y, "+"));
console.log(calculator(x, y, "-"));
console.log(calculator(x, y, "*"));
console.log(calculator(x, y, "/"));
// console.log(calculator(4, 4, "*"));

//Object;

const champNas = {
  pasSkill: "Siphon life",
  qSkill: "Siphoning strike",
  wSkill: "Wither",
  eSkill: "Purging fire",
  rSkill: "Dominus",

  laningPhase: function () {
    console.log("Start stacking bro");
  },
  qPress: function () {
    console.log("Plus 6");
  },
  wPress: function () {
    console.log("Why are you running?");
  },
  ePress: function () {
    console.log("Ap Woof");
  },
  rPress: function () {
    console.log("Big doggo");
  },
  getqSkill: function () {
    return this.qSkill;
  },
};

const champVieg = {
  pasSkill: "Mr. steal yo girl",
  qSkill: "Zeeng Zeeng",
  wSkill: "Dashtun",
  eSkill: "Free Stealth",
  rSkill: "Unstoppable Edgy",
  laningPhase: function () {
    console.log("Go to your jungle");
  },
  qPress: function () {
    console.log("Aa reset");
  },
  wPress: function () {
    console.log("Stay there");
  },
  ePress: function () {
    console.log("Where did it come from?");
  },
  rPress: function () {
    console.log("Ysolde");
  },
};
