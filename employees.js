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

//CODE HERE
class Employee {// created employee class that creates a instance with a name and shift
    constructor(name, shifts){
        this.name = name
        this.shifts = shifts
    }
    getSchedule(){// method to print a given employees schedule
        console.log(`${this.name} works on ${this.shifts}`)
    }
}


/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

//CODE HERE
let empOne = new Employee('bobert', 'weekends and weekday evenings' )// creating new employee
/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE
empOne.getSchedule()// calling get schedule on the new employee

/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE
let empTwo = {...empOne}// spread method to copy one instance too a new instance
empTwo.name = 'Nick'// change name to nick


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

//CODE HERE
class Manager extends Employee{// a child class of employee
    constructor(name, shifts, employees){// constructor that now adds an array of employees
        super(name, shifts)
        this.employees = employees
    }
    getEmployees(){// method that prints a list of who the manager manages
        console.log(`${this.name} manages ${this.employees}`)
    }
    addEmployee(emp){// method that adds an employee under the manager
        this.employees.push(emp)
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

//CODE HERE
let manager = new Manager('Mr.Baldy', 'all week days', ['Mr.Hair','Mr.Less Hair' ])// created new manager

/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

//CODE HERE
manager.getEmployees()// called get employees method
/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE 
manager.addEmployee('Mr.Too Much Hair')// called add employees to add a new employee under the manager
/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

//CODE HERE
manager.getEmployees()// recalled get employees to test