const addEmployeesBtn = document.querySelector('#add-employees-btn');

//*This Section automatically populates the pre determined employee names and salary and adding them to employeesArray.*\\
let employeesArray = [
  { 
    firstName: 'Luis', 
    lastName: 'Aldaz', 
    salary: 50500 
  },
  { 
    firstName: 'Jack', 
    lastName: 'Rogers', 
    salary: 52400
  },

]
//*This Section is for the function of collecting new employee names and salary and adding them to employeesArray.*\\
const collectEmployees = function(){
  let continueAdding = true;
  while (continueAdding) {
    const firstName = prompt('Enter employee first name:');
    const lastName = prompt('Enter employee last name:');
    let salary = parseFloat(prompt('Enter employee salary:'));
    if (isNaN(salary) || salary < 0) {
    salary = 0;
    }
     employeesArray.push({firstName, lastName, salary});
     continueAdding = confirm('Do you want to add another employee?');
  }

  return employeesArray;
}



//*This Section is for the function of getting the average salary and number of employees and then displaying the number of employees and average salary of posted employees in the console when the code is run. *\\
const displayAverageSalary = function(employeesArray) {
  const numberOfEmployees = employeesArray.length;
  
  if (numberOfEmployees > 0) {
    const totalSalary = employeesArray.reduce((acc, employeesArray) => acc + employeesArray.salary, 0);
    const averageSalary = totalSalary / numberOfEmployees;
    console.log(`The average salary between our ${numberOfEmployees} employee(s) is $${averageSalary.toFixed(2)}.`);
  } 
}
  


//*This Section is for the function of creating a random drawing and the computer choose a random employee and diplay the winner in the console when the code is run. *\\
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

  return randomEmployee;
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

