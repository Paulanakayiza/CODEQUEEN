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
for(let student of students){
let division= $("<div>", {class: "subDiv"});
    $(".display").append(division);
    
    let stdId= $(`<p> ${student.id}</p>`);
    let stdName= $(`<p> ${student.name}</p>`);
    let stdAge= $(`<p> ${student.age}</p>`);
    
    $(division).append(stdId);
    $(division).append(stdName);
    $(division).append(stdAge);
    
    for (let subject of student.subjects){
       let subName = $(`<p> ${subject.id}, ${subject.name}</p>`);
       let subscore = $(`<p> ${subject.score}</p>`);
        
       
        $(division).append(subName);
        $(division).append(subscore);
    }
}



    
        
       
   
  
        
    