// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// addEmployeesBtn.addEventListener('click', function() {
// //     const userFirstName = prompt('add First Name');
//         // const firstName = prompt ("enter first name");
//         // const lastName = prompt ("enter last name");
//         // const salary = prompt ("enter salary");
//         // const number = parseInt(salary);
//         // console.log('does this work?')
// });

// had some help condesing it (former structure on the bottom).
const employees = [];

const collectEmployees = function() {
    let addAnother = true;

    while (addAnother) {
        const firstName = prompt("Enter first name");

        if (firstName === null) {
          break; 
      }
        const lastName = prompt("Enter last name");
        let salary = prompt("Enter salary");

        displayEmployees(employees);

        // Convert salary to a number
        salary = parseFloat(salary);

        // Check if salary is a valid number
        if (isNaN(salary)) {
            salary = 0; // Default to $0 if not a valid number
        }

        
        const employee = {
            firstName: firstName,
            lastName: lastName,
            salary: salary
        };

        employees.push(employee);

        addAnother = confirm('Do you want to add another employee?');
    }

    return employees;
};

// addEmployeesBtn.addEventListener('click', function() {
//     const employeeData = collectEmployees();
    
// });

// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  const numberOfEmployees = employeesArray.length;
  // check to make sure the line below displays the average in the console log 
  console.log(`The average salary is: ${averageSalary}`);
}
//TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
const randomIndex = Math.floor(Math.random() * employeesArray.length);
const randomEmployee = employeesArray[randomIndex];
console.log(`${randomEmployee.firstName} ${randomEmployee.lastName}`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);