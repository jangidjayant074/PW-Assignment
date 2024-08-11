function Student(name) {
    this.name = name;
  }
  Student.prototype.printDetails = function () {
    console.log(`Hello, My Name is ${this.name}`);
  };
  const student = new Student("Shivank Tyagi");
  student.printDetails(); 