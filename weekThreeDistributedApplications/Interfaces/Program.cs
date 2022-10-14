using System;

namespace InterfacesCSharp;

public class Animal {
    public string name;
    Animal(string name) {
        this.name = name;
    }
    void makesound(){
        Console.WriteLine("Animal Sound Goes Here");
    }
}

interface IPet {
    void dance(); // dance is an abstract method because it is missing a pair of curly braces.
}

class Dog : Animal, IPet {
    public Dog(string name) : base(name) {
    }
    public void dance(){
        Console.WriteLine("I'm a Dancing Dog");
    }
}

class Cat : Animal {
    public Cat(string name) : base(name){
    }
    public override void makesound(){
        Console.WriteLine("Meow");
    }
    public void dance(){
        Console.WriteLine("I'm a Dancing Cat");
    }
}

class Robot {
public void dance(){
    Console.WriteLine("I'm a Dancing Robot");
}
}