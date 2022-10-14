using System;

namespace ObjectOrientedProgramming;

class Person{

    private int age;
    private int heightFt;
    private int heightIn;
    private string fName;
    private string lName;

    public Person(){
        // Default Constructor
    }

    public Person(int age, int heightFt, int heightIn, string fName, string lName){
        this.age = age;
        this.heightFt = heightFt;
        this.heightIn = heightIn;
        this.fName;
        this.lName;
    }

    public string getFirstName(){
        return fName;
    }
    public string getLastName(){
        return lName;
    }
    public int getAge(){
        return age;
    }
    public int getFtHeight(){
        return heightFt;
    }
    public int getInHeight(){
        return heightIn;
    }

}