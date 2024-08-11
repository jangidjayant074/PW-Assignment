function getPerson(person){
    try {
        if( typeof person !== "object"|| !person.name || !person.age ){
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}

const personInfo = {
    name : "Shivank Tyagi",
    age : 21,
}

const personInfo2 = {
    name : " Tyagi",
  
}

console.log(getPerson(personInfo));
console.log(getPerson(personInfo2));
  

  