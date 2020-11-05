const students=[
    {id: 1,
     name: "Paula",
     age: 18,
     subjects:[
         {id: 1,
         name: "Math",
         score: 90,
         }, 
        {id: 2,
        name: "English",
        score: 75,
        },
        {id: 3,
        name: "Literature",
        score: 32,}
             ]
    },
    
    {id: 2,
    name: "Mark",
    age: 15,
    subjects:[
        {id: 1,
        name: "Math",
        score:55,
        },
        {id: 2,
         name:"English",
         score:79,
        },
        {id: 3,
         name: "Literature",
         score: 50,
        },
            ]
    },
    
    {id: 3,
     name: "Paul",
     age: 19,
     subjects:[
         {id: 1,
         name: "Math",
         score: 60,
         },
        {id: 2,
        name: "English",
        score: 55,
        },
        {id: 3,
        name: "Literature",
        score: 90,}
              ]
    },
    
        {id: 4,
     name: "Jackson",
     age: 17,
     subjects:[
         {id: 1,
         name: "Math",
         score: 40,
         },
        {id: 2,
        name: "English",
        score: 86,
        },
        {id: 3,
        name: "Literature",
        score: 62,}
              ]
    },
    
    {id: 5,
     name: "Sharon",
     age: 20,
     subjects:[
         {id: 1,
         name: "Math",
         score: 70,
         },
        {id: 2,
        name: "English",
        score: 85,
        },
        {id: 3,
        name: "Literature",
        score: 51,}
              ]
    },
    
    {id: 6,
     name: "Luke",
     age: 25,
     subjects:[
         {id: 1,
         name: "Math",
         score: 62,
         },
        {id: 2,
        name: "English",
        score: 53,
        },
        {id: 3,
        name: "Literature",
        score: 68,}
              ]
    },
    
    ];



const oneCard = document.getElementById("card-one");
oneCard.innerHTML = students[0]
const twoCard = document.getElementById("card-two");
twoCard.innerHTML = students[1]
const threeCard = document.getElementById("card-three");
threeCard.innerHTML = students[2]
const fourCard = document.getElementById("card-four");
fourCard.innerHTML = students[3]
const fiveCard = document.getElementById("card-five");
fiveCard.innerHTML = students[4]
const sixCard = document.getElementById("card-six");
sixCard.innerHTML = students[5]


const mainDiv = document.getElementbyId('display');
mainDiv.appendChild(oneCard);
mainDiv.appendChild(twoCard);
mainDiv.appendChild(threeCard);
mainDiv.appendChild(fourCard);
mainDiv.appendChild(fiveCard);
mainDiv.appendChild(sixCard);
       
   
  
        
    