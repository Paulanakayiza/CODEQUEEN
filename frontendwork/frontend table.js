const students=[];

const heading = document.createElement("div");
heading.classList.add("header");
const miniHeading = document.createElement("h1");
miniHeading.innerHTML= "STUDENT HUB";
const logo = document.createElement("img");
logo.innerHTML = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZ4PhFA_mvWnxX-6jF2FwRwlPgWwUW6Kwgzg&usqp=CAU";

heading.appendChild(miniHeading);
heading.appendChild(logo);

const container = document.createElement("div");
container.classList.add("memo");
const tableHeading = document.createElement("h3");
tableHeading.innerHTML = "REGISTERED STUDENTS"
container.appendChild(tableHeading);

const box = document.createElement("table");
const headerRow = document.createElement("tr");
const boxColumnOne = document.createElement("th");
boxColumnOne.innerHTML = "#id"; 
const boxColumnTwo = document.createElement("th");
boxColumnTwo.innerHTML = "First Name";
const boxColumnThree = document.createElement("th");
boxColumnThree.innerHTML =  "Last Name";
const boxColumnFour = document.createElement("th");
boxColumnFour.innerHTML = "Email";
const boxColumnFive = document.createElement("th");
boxColumnFive.innerHTML = "Age"; 
const tableBody = document.createElement("tbody")

box.appendChild(headerRow);
headerRow.appendChild(boxColumnOne);
headerRow.appendChild(boxColumnTwo);
headerRow.appendChild(boxColumnThree);
headerRow.appendChild(boxColumnFour);
headerRow.appendChild(boxColumnFive);
box.appendChild(tableBody);

container.appendChild(tableHeading);
container.appendChild(box);
document.getElementById("table-container").appendChild(container);

const createStudentData = (student)=>{
    const tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    const studentId = document.createElement("td");
    const studentFirstName =document.createElement("td");
    const studentLastName =document.createElement("td");
    const studentEmail =document.createElement("td");
    const studentAge =document.createElement("td");

    studentId.innerHTML = student.id;
    studentFirstName.innerHTML = student.firstName;
    studentLastName.innerHTML = student.lastName;
    studentEmail.innerHTML = student.email;
    studentAge.innerHTML = student.age;

    tableRow.appendChild(studentId  );
    tableRow.appendChild(studentFirstName);
    tableRow.appendChild(studentLastName);
    tableRow.appendChild(studentEmail);
    tableRow.appendChild(studentAge);
}

for(let student of students){
    createStudentData(student);
      
}

const saveBtn = document.getElementById("savebtn");
    saveBtn.addEventListener('click', () =>{
        const newFirstNameInput= document.getElementById("firstname");
        const newFirstNameInputValue = newFirstNameInput.value;
        const newLastNameInput = document.getElementById("lastname");
        const newLastNameInputValue = newLastNameInput.value;
        const newEmailInput = document.getElementById("email");
        const newEmailInputValue = newEmailInput.value;
        const newAgeInput = document.getElementById("age");
        const newAgeInputValue = newAgeInput.value;

        studentItem ={
            id: students.length + 1,
            firstName: newFirstNameInputValue,
            lastName: newLastNameInputValue,
            email:newEmailInputValue,
            age: newAgeInputValue
        }
        students.push(studentItem);
        createStudentData(studentItem);
        
        newFirstNameInput.value = " ",
        newLastNameInput.value = " ",
        newEmailInput.value = " ",
        newAgeInput.value= " "
    });