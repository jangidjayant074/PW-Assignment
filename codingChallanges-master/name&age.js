function ageInDays(person){
    const completeName = `${person.name} ${person.lastName}`;
    const ageInDays = person.age * 365.25;
    function age(){
        console.log(`The person fullName is ${completeName} and his age in day's is ${ageInDays}`);
    }
    return age;
}
const personInformation = {
    name : "Shivank",
    lastName : "Tyagi",
    age :21 ,
};
const personDetail = ageInDays(personInformation);
personDetail();

