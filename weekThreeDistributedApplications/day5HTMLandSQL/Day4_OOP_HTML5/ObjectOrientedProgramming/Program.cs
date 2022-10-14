using System;

namespace ObjectOrientedProgramming
{
    class Program 
    {
        static void Main(string[] args)
        {
            Pizza piz1 = new Pizza("Pepperoni",23.0,12.0,"bread");
            Pizza piz2 = new Pizza("Meat feast", 43.0, 12.0, "cheesebread");
            //polymorphism a pizza inside a Food reference
            // Another way to say inheritance is with the word IS-A {relationship}
            Food piz3 = new Pizza("Meat feast", 46.0, 18.0, "cheesecrust");
            Drink dk1 = new Drink("Diet Coke",1.9,0.5);
            Drink dk2 = new Drink("Pepsi", 2.9, 0.7);

            //polymorphism
            Food[] order = {piz1, piz2, dk1, dk2, piz3};

            double totalprofit = 0.0;

            foreach (Food item in order)
            {
                Console.WriteLine(item.CalculateProfit());

                //totalprofit += item.CalculateProfit(); shothand for below

                totalprofit = totalprofit + item.CalculateProfit();
            }

           Dog dg1 = new Dog("Jack");
           Cat ct = new Cat("Tom");
           Robot rb = new Robot();

           // Animal relationship
           Animal[] classroom  = { dg1, ct };

           //Pet relationship
           IPet[] classroom2 = {dg1, ct, rb};

           foreach (IPet item in classroom2)
           {
                item.dance();
           }
 

            Person pr1 = new Person("John",25);

            //pr1.name = "Boris";
            pr1.Age(-35) ;
            pr1.Name("Boris");

            //below not posible again because price is now a private data member
            piz1.price = -34.5;
            //piz1.cost = 34.0;

            //wrong
            //Food fd = new Food("unknown",0.0,0.0);


            double profit = piz1.CalculateProfit();
            double profit2 = dk1.CalculateProfit();
            Console.WriteLine(profit); // pizza profit
            Console.WriteLine(profit2); // drink profit


            // Using the IComparable interface for sorting collections
            Person p1 = new Person("James",23);
            Person p2 = new Person("Zoe", 83);
            Person p3 = new Person("Emma", 43);
            Person p4 = new Person("Kelly", 37);
            Person p5 = new Person("Mary", 54);

            Person[] employees = { p1, p2, p3, p4, p5};
            Console.WriteLine("--------before sort ------");
            foreach (var item in employees)
            {
                Console.WriteLine(item.Age());
            }
            Console.WriteLine("--------after sort ------");
            Array.Sort(employees);

            foreach (var item in employees)
            {
                Console.WriteLine(item.Age());
            }

        }
    }
}
