class Car{
   
    constructor(company, model ,year){
        this.company= company;
        this.model  = model;
        this.year = year;
    }

    getDiscription(){
        return `This is ${this.year} ${this.company} ${this.model}`;
    }

}
const carDetails = new Car("SAcorpio", "model N", 2022);
console.log(carDetails.getDiscription());