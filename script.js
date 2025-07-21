const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({ name: "Alice", age: 25 }));
console.log(countProps({}));

function findBestEmployee(employees) {
  let bestName = "";
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestName = name;
    }
  }

  return bestName;
}

const team = {
  Ann: 29,
  David: 35,
  Helen: 1,
  Lorence: 99,
};

console.log(findBestEmployee(team));

function countTotalSalary(employees) {
  let total = 0;

  for (const salary of Object.values(employees)) {
    total += salary;
  }

  return total;
}

const salaries = {
  Mango: 100,
  Poly: 150,
  Alfred: 80,
};

console.log(countTotalSalary(salaries));

function getAllPropValues(arr, prop) {
  const result = [];

  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }

  return result;
}

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "category"));

function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}

console.log(calculateTotalPrice(products, "Radar"));
console.log(calculateTotalPrice(products, "Droid"));
console.log(calculateTotalPrice(products, "Unknown"));
