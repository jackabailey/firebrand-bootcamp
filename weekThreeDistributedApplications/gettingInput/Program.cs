// See https://aka.ms/new-console-template for more information

using System;

namespace GettingInput; // A namespace allows the seperation of code. They are used for creating a logical seperation between parts of code

class GettingInput{ // Everything in C Sharp must be caontined within a class, as it is a purely object-oriented programming language

    static void Main(String[] args){ // This is our programs entry point

        Console.WriteLine("Please enter your First name and press ENTER"); // Allows writing to the console
        String fname = Console.ReadLine();
        Console.WriteLine("Please enter your middle name and press ENTER"); // Allows writing to the console
        String mname = Console.ReadLine();
        Console.WriteLine("Please enter your last name and press ENTER"); // Allows writing to the console
        String lname = Console.ReadLine();
        Console.WriteLine(fname + " " + mname + " " + lname);
    }
}