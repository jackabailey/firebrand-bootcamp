// See https://aka.ms/new-console-template for more information

using System;

namespace WelcomeToCSharp; // A namespace allows the seperation of code. They are used for creating a logical seperation between parts of code

class Helloworld{ // Everything in C Sharp must be caontined within a class, as it is a purely object-oriented programming language

    static void Main(String[] args){ // This is our programs entry point
    // It takes an array of strings. This is what is read when we provide build or run tags in command line.
    // A CS5001 Error will be thrown by the terminal if this is the case

        Console.WriteLine("Hello, World!"); // Allows writing to the console
    }

}