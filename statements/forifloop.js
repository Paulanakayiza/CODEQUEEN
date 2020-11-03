const students=[
    {id: 1,
     Name: "Paula",
     Age: 18,
     Subjects:[
         {id: 1,
         Name: "Math",
         Score: 90,
         }, 
        {id: 2,
        Name: "English",
        score: 75,
        },
        {id: 3,
        Name: "Literature",
        Score: 32,}
             ]
    },
    
    {id: 2,
    Name: "Mark",
    Age: 15,
    Subjects:[
        {id: 1,
        Name: "Math",
        Score:55,
        },
        {id: 2,
         Name:"English",
         Score:79,
        },
        {id: 3,
         Name: "Literature",
         Score: 50,
        },
            ]
    },
    
    {id: 3,
     Name: "Paul",
     Age: 19,
     Subjects:[
         {id: 1,
         Name: "Math",
         Score: 60,
         },
        {id: 2,
        Name: "English",
        score: 55,
        },
        {id: 3,
        Name: "Literature",
        Score: 90,}
              ]
    },
    
        {id: 4,
     Name: "Jackson",
     Age: 17,
     Subjects:[
         {id: 1,
         Name: "Math",
         Score: 40,
         },
        {id: 2,
        Name: "English",
        score: 86,
        },
        {id: 3,
        Name: "Literature",
        Score: 62,}
              ]
    },
    
    {id: 5,
     Name: "Sharon",
     Age: 20,
     Subjects:[
         {id: 1,
         Name: "Math",
         Score: 70,
         },
        {id: 2,
        Name: "English",
        score: 85,
        },
        {id: 3,
        Name: "Literature",
        Score: 51,}
              ]
    },
    
    {id: 6,
     Name: "Luke",
     Age: 25,
     Subjects:[
         {id: 1,
         Name: "Math",
         Score: 62,
         },
        {id: 2,
        Name: "English",
        score: 53,
        },
        {id: 3,
        Name: "Literature",
        Score: 68,}
              ]
    },
    
    ];
for(let student of students){
let division= $("<div>", {class: "subDiv"});
    $(".display").append(division);
    
    let stdId= $(`<p> ${student.id}</p>`);
    let stdName= $(`<p> ${student.Name}</p>`);
    let stdAge= $(`<p> ${student.Age}</p>`);
    
    $("division").append(stdId);
    $("division").append(stdName);
    $("division").append(stdAge);
    
    for (let subject of student.Subjects){
       let subName = $(`<p> ${Subjects.id}, ${Subjects.Name}</p>`);
       let subscore = $(`<p> ${Subjects.score}</p>`);
        
       
        $("division").append(subName);
        $("division").append(subscore);
        }
}



    
        
       
   
  
        
    