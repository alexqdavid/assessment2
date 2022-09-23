////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

class employee {
    constructor(name, shifts){
      this.name = name;
        this.shifts = shifts;
           }
            getSchedule (){
   
             console.log(`${this.name} works on ${this.shifts}`);

            }
       }
    let alex = new employee("alex", "mornings")
  alex.getSchedule()
/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

let empOne = new employee("jess", "weekday mornings")

/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

empOne.getSchedule()



/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

let empTwo = new employee("Nick", "weekday nights")
empTwo.getSchedule()



//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

class Manager extends employee {
    constructor(name, shifts, employee){
    super(name, shifts)
    this.employee = employee;
    }
    getEmployees(){
console.log(`${this.name} manages ${this.employee}`);
}
addemployee([emp]){
    this.addemployee[emp]
}
}



/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

let manager = new Manager("bob", "morning", ["billy", "jon"])


/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

manager.getEmployees()

/*
    Call the `updateStatus` method on
    `firstTicket` passing in the string
    'cooking'
*/

manager.addemployee('doe')

/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

manager.getEmployees(manager.addemployee('doe'))