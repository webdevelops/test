let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sumOfSalaries = 0;

for (let key in salaries) {
  sumOfSalaries += salaries[key];
}

console.log(sumOfSalaries);