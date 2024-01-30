function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const pattern = /"[a-zA-Z0-9\s\-\,]+"/g;
    const input = document.getElementsByTagName("textarea")[0];
    const restaurants = input.value.matchAll(pattern);

    const restaurantsObj = {};

    for (const current of restaurants) {
      const restaurant = current[0].replace(/\"/g, "");
      const [name, rest] = restaurant.split(" - ");
      const employees = rest.split(", ");

      if (restaurantsObj.hasOwnProperty(name) === false) {
        restaurantsObj[name] = { employees: {} };
      }

      employees.forEach((employee) => {
        const [employeeName, salary] = employee.split(" ").filter((e) => e);
        restaurantsObj[name]["employees"][employeeName] = Number(salary);
      });

      let averageSalary =
        employees.reduce((acc, current) => {
          const salary = current.match(/\d+/g);
          return acc + Number(salary[0]);
        }, 0) / employees.length;

      restaurantsObj[name]["averageSalary"] = Number(averageSalary.toFixed(2));
    }

    let bestRestaurantSalary = 0;
    let bestRestaurant;
    let workers;

    Object.entries(restaurantsObj).forEach((restaurant) => {
      if (restaurant[1].averageSalary > bestRestaurantSalary) {
        bestRestaurant = restaurantsObj[restaurant[0]];
        bestRestaurant["name"] = restaurant[0];
        workers = restaurant[1].employees;
      }
    });

    workers = Object.entries(workers).sort((a, b) => b[1] - a[1]);
    bestRestaurant["bestSalary"] = workers[0][1];

    document.querySelector("#outputs #bestRestaurant p").textContent = `Name: ${
      bestRestaurant.name
    } Average Salary: ${bestRestaurant.averageSalary.toFixed(
      2
    )} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

    document.querySelector("#outputs #workers p").textContent = workers
      .map((worker) => {
        return `Name: ${worker[0]} With Salary: ${worker[1]}`;
      })
      .join(" ");
  }
}
