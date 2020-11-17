// const containerDiv = document.getElementById("container")
// const headDiv = document.getElementById("header")
// const mainDiv = document.getElementById("main")

// for(let student of students){
//     const firstName = document.createElement("div");
//     firstName.classList.add("firstname");

//     const lastName = document.createElement("div");
//     lastName.classList.add("lastname");

//     const emailInput = document.createElement("div");
//     emailInput.classList.add("email");

//     const ageInput = document.createElement("div");
//     ageInput.classList.add("age");
// };
// const students = []
// for (let student of students){

// const newFirstNameInput = document.getElementById("firstname");
// const newFirstNameInputvalue = newFirstNameInput.value;
// const newLastNameInput = document.getElementById("lastname");
// const newLastNameInputvalue = newLasttNameInput.value;
// const newEmailInput = document.getElementById("email");
// const newEmailInputvalue = newEmailInput.value;
// const newAgeInput = document.getElementById("age");
// const newAgeInputvalue = newAgeInput.value;

// window.onload = function() {
//     var table = document.getElementById("myTable");
//     var column = table.insertColumn(1);
//     var cell1 = column.insertCell(1);
    
//     // cell1.innerHTML = students.length + 1;
     
//     var column = table.insertColumn(2);
//     var cell1 = column.insertCell(1);
//     // cell1.innerHTML = newFirstNameInputvalue;
     
//     var column = table.insertColumn(3);
//     var cell1 = column.insertCell(1);

//     // cell1.innerHTML = newLastNameInputvalue;

//     var column = table.insertColumn(4);
//     var cell1 = column.insertCell(1);
    
//     // cell1.innerHTML = newEmailInputvalue ;

//     var column = table.insertColumn(5);
//     var cell1 = column.insertCell(1);
//     cell1.innerHTML = newAgeInputvalue;
//  };
// }


var tableString = "<table>",
body = document.getElementsByTagName('body')[0],
div = document.createElement('div');
// const newFirstNameInput = document.getElementById("firstname");
// const newFirstNameInputvalue = newFirstNameInput.value
// for(newFirstNameInputvalue = newFirstNameInput.value; )

for (row = 1; row<500; row += 1) {

tableString += "<tr>" 
tableString += "<td>" + row +"</td>"

for (col = 1; col < 6; col += 1) {
   
    tableString = "<td>" +  "#id" + "</td>" + "        ";
    tableString += "<td>" +  "First Name" + "</td>" + "       ";
    tableString += "<td>" +  "Last Name" + "</td>" +"       ";
    tableString += "<td>" +  "Email" + "</td>" + "       ";
    tableString += "<td>" +  "Age" + "</td>";
}
tableString += "</tr>";
}

tableString += "</table>";
div.innerHTML = tableString;
body.appendChild(div);