class Employee{
    constructor(name, position , salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return `Employee Salary is : ${this.salary}`;
    }
}
 const employeDeatils = new Employee("Shivank Tyagi", "SDE", 85000)
 console.log(employeDeatils.getSalary());