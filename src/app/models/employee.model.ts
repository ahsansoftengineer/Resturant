export class Employee {
  constructor(
    public id: number,
    public name: string,
    public gender: string,
    public email?: string,
    public phoneNumber?: string,
    public contactPreference?: string,
    public dateOfBirth?: Date,
    public department?: string,
    public isActive?: boolean,
    public photoPath?: string
  ) {}

  employeeList = [
    new Employee(
      (this.id = 101),
      (this.name = 'Ahsan'),
      (this.gender = 'Male'),
      (this.email = 'ahsansoftengineer@gmail.com'),
      (this.phoneNumber = '03212827700'),
      (this.contactPreference = 'email'),
      (this.dateOfBirth = new Date('04-07-1992')),
      (this.department = 'IT'),
      (this.isActive = true),
      (this.photoPath = '../../Capture.PNG')
    ),
    new Employee(
      (this.id = 102),
      (this.name = 'Furqan'),
      (this.gender = 'Male'),
      (this.email = 'furqantechnician@gmail.com'),
      (this.phoneNumber = '03242694784'),
      (this.contactPreference = 'phone'),
      (this.dateOfBirth = new Date('04-07-1991')),
      (this.department = 'HR'),
      (this.isActive = false),
      (this.photoPath = './Capture.PNG')
    ),
    new Employee(
      (this.id = 103),
      (this.name = 'Sumaya'),
      (this.gender = 'Female'),
      (this.email = 'sumayateacher@gmail.com'),
      (this.phoneNumber = '03212826600'),
      (this.contactPreference = 'email'),
      (this.dateOfBirth = new Date('02-03-1990')),
      (this.department = 'HR'),
      (this.isActive = true),
      (this.photoPath = './Capture.PNG')
    ),
  ];
}
