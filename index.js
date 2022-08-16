//1.json iterate in (for, for in, for Of, forEach)

let student=[{"name":'AAAA',"age":24,"city":"coimbatore","department":"BSC IT"},{"name":'BBBB',"age":25,"city":"chennai","department":"BSC CT"}];
for (let i=0;i<student.length;i++){
    console.log(student[i]);
}
for (key in student){
 console.log(key);
   console.log(student[key]);
}

for (key of student){
    console.log(key);
}
student.forEach(function(details,index,arr) 
 {
    console.log(arr[index]);
});


//2.resume in json format

let resume={
    "name":"surya",
    "age":24,
    "city":"coimbatore",
    "email":"suryaprakashr1025@gmail.com",
    "phoneNo":9566953853,
    "degree":"BSC IT",
    "college":"sri krishna college of arts and science",
    "hobby":"watching movie"
}

for (key in resume){
    console.log(key+":"+resume[key]);
    
}
