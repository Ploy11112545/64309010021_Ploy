let obj={
    "firstName" : "Ploy",
    "lastName" : "Pongsa",
    "isAlive" : true,
    "age" : 20,
    "address" : {
        "stresstAddress" : "68 4nd Stress",
        "City" : "New  YORK",
        "State" : "NY",
        "postalCode" : "10021-3100"
    },
    "phoneNumber" :[{
        "type" : "home",
        "numbre" : "212 555-1234"
    },{
        "type" : "office",
        "numbre" : "646 555-4567"
    },{
        "type" : "mobile",
        "numbre" : "1234 456-7890"
    }],
    "childern" :[],
    "spouse" : null
};
console.log(obj.phoneNumber[1].numbre);