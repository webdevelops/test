let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 200
};

function topSalary(obj) {
  let max = 0;
  let maxName = null;
  
  for (const [name, salary] of Object.entries(obj)) {
    if (salary > max) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log("topSalary -> topSalary", topSalary(salaries));