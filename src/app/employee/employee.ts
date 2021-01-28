export class Employee{
  id: number;
  name: string;
  gender:string;
  dob: string
  employees: Employee[];
   constructor(id:number, name:string, gender:string, dob:string){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.dob = dob;
  }
  EmployeeList(): Employee[]{
    this.employees = [
      new Employee(101,'Ali', 'male', '01-01-2021'),
      new Employee(102,'Ahsan', 'male', '02-01-2021'),
      new Employee(103,'Shumaila', 'female', '03-04-2021'),
      new Employee(104,'Samina', 'female', '04-01-1921'),
      new Employee(105,'Javeria', 'female', '05-01-1940')
    ]
    return this.employees;
  }
}
