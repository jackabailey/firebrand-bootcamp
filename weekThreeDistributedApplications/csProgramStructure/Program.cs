// See https://aka.ms/new-console-template for more information

using System;

// namespace WelcomeToCSharp; // A namespace allows the seperation of code. They are used for creating a logical seperation between parts of code

class Helloworld{ // Everything in C Sharp must be caontined within a class, as it is a purely object-oriented programming language

    static void Main(String[] args){ // This is our programs entry point
    // It takes an array of strings. This is what is read when we provide build or run tags in command line.
    // A CS5001 Error will be thrown by the terminal if this is the case

        Console.WriteLine("Hello, World!"); // Allows writing to the console
        // String s = Console.readLine(); // Reads a line from the console, and places it into a given variable. This will always be a string.
        // String t = Console.read(); // We can also use .read, which prevents the console from moving to a new line before taking user input. Otherwise, these two commands are effectively the same

        // A generic if statement:
        Console.WriteLine("Enter a number"); // Remember that C Sharp is Case-sensitive. it's WriteLine, not writeLine!!!
        String i1 = Console.ReadLine(); // String and string can be used interchangably... string is an alias for String
        Console.WriteLine("Enter a number");
        String i2 = Console.ReadLine();
        int number1 = Convert.ToInt32(i1); // ToInt32 Will convert the variable given ,provided it can be, to a 32-bit integer value. This should be handled by an error catcher 
        int number2 = Convert.ToInt32(i2);
        Console.WriteLine("Enter an operator");
        String mops = Console.ReadLine(); 

        if (mops.Equals("+")){ // If statements are identical to most languages.
            int result = number1 + number2;
            Console.WriteLine(result);
        }

        File.OpenText(@"Path\To\file") // Here, we can open files in C Sharp. Make sure to put the @ symbol in front of the quotation marks when you want CS to directly read the path, while ignoring back slashes.
    }
}