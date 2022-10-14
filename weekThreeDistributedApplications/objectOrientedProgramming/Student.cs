using System;

namespace ObjectOrientedProgramming;

class Student : Person{

    private int id;
    private string classID;

    public Student(){
        // Default Constructor
    }

    public Student(int id, string classID){
        // Constructor Method
    }

    public int GetStudentID(){
        return id;
    }
    
}