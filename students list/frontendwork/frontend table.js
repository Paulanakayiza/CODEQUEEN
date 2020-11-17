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
const box = document.createElement("table");
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

box.appendChild(boxColumnOne);
box.appendChild(boxColumnTwo);
box.appendChild(boxColumnThree);
box.appendChild(boxColumnFour);
box.appendChild(boxColumnFive);
container.appendChild(tableHeading);
container.appendChild(box);

for(let student of students){
    const newFirstNameInput = document.getElementById("firstname");
    const newFirstNameInputvalue = newFirstNameInput.value;
    const newLastNameInput = document.getElementById("lastname");
    const newLastNameInputvalue = newLasttNameInput.value;
    const newEmailInput = document.getElementById("email");
    const newEmailInputvalue = newEmailInput.value;
    const newAgeInput = document.getElementById("age");
    const newAgeInputvalue = newAgeInput.value;

    const saveBtn = document.getElementById("savebtn");
    saveBtn.addEventListener('click', () =>{
        student ={
            id: students.length + 1,
            firstName: newFirstNameInputValue,
            lastName: newLastNameInputValue,
            email:newEmailInputValue,
            age: newAgeInputValue
        }
        students.push(newFirstNameInput);
        students.push(newLastNameInput);
        students.push(newEmailInput);
        students.push(newAgeInput);

        boxColumnOne.push(students.length + 1);
        boxColumnTwo.push(newFirstNameInput);
        boxColumnThree.push(newLastNameInput);
        boxColumnFour.push(newEmailInput);
        boxColumnFive.push(newAgeInput);
        
        newFirstNameInput.value = " ",
        newLastNameInput.value = " ",
        newEmailInput.value = " ",
        newAgeInput.value= " "
    });
}