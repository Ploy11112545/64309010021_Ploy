let myJSON =`{"firstName" : "Ploy","lastName"  : "Pongsa","age" : 25}`;
let myObj ={
    firtName : "Ploy",
    lastName : "Pongsa",
    age : 20

}
//console.log(typeof(myJSON));
//console.log(typeof(myObj));

//function parse
let obj2 = JSON.parse(myJSON);
console.log(obj2);
console.log(obj2,typeof(obj2));

//function stringify
let JSON2 = JSON.stringify(myObj);
console.log(JSON2,typeof(JSON2));