let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sumSalaries = 0;

for (let key in salaries) {
  sumSalaries += salaries[key];
}

const result = Object
  .values(salaries)
  .reduce((currentSalary, nextSalary) => currentSalary + nextSalary, 0);

console.log(sumSalaries);
console.log(result);