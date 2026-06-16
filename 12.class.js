//! class

// let john = {
//   name: "John Doe",
//   email: "john@gmail.com",
//   password: "12345",
// };

// let user = {
//   name: "user",
//   email: "user@gmail.com",
//   password: "12345",
// };

// let u = {

// }

class User {
  //   name;
  //   email;
  #password; //* private property

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  getPassword() {
    return this.#password;
  }
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  introduce() {
    console.log("This is User class");
  }
}

let john = new User("John Doe", "john@gmail.com", "123456");
// console.log(john);
// console.log(john.name);
// console.log(john.getPassword());
// console.log(john["email"]);

//! Student(name,email,password,faculty, roll , batch)

//* inheritance
class Student extends User {
  faculty;
  roll;
  batch;
  //  super()
  constructor(name, email, password, faculty, batch, roll) {
    super(name, email, password);
    this.batch = batch;
    this.faculty = faculty;
    this.roll = roll;
  }
  getBatch() {
    return this.batch;
  }

  introduce() {
    console.log("This is Student class");
  }
}

let ram = new Student("Ram Doe", "ram@gmail.com", "123456", "BCT", 2017, 45);

// console.log(ram);
// console.log(ram.getPassword());
// console.log(ram.getEmail());
// console.log(ram.getName());
// john.introduce();
// ram.introduce();

//* abstraction

class MakeCoffee {
  start() {
    console.log("Start");
    this.#grinding();
    this.#heatingWater();
    this.#processing();
    this.#despatch();
  }

  #grinding() {
    console.log("grinding");
  }

  #heatingWater() {
    console.log("Heating water");
  }

  #processing() {
    console.log("processing");
  }

  #despatch() {
    console.log("Coffee is ready");
  }
}
const cm = new MakeCoffee();
cm.start();

// cm.grinding();
// cm.heatingWater();
// cm.processing();
// cm.despatch();

//todo: static method , getter , setter

class Circle {
  radius;
  constructor(r) {
    this.radius = r;
  }

  set rad(r) {
    this.radius = r;
  }

  get area() {
    return (Math.PI * this.radius * this.radius).toFixed(3);
  }
}

const c1 = new Circle(10);

console.log(c1.area);
c1.rad = 12;
console.log(c1.area);
