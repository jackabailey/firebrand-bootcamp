using System;

namespace ObjectOrientedProgramming{

    class Animal{
        private string name = "";
        public Animal(string name){
            this.name = name;
        }
        //child class can use it or make thier own
        public virtual void makesound(){
            Console.WriteLine("making sound");
        }
    }

    interface IPet
    {
        void dance(); // dance is an abstract method because it is missing the pair of {}
    }
    class Dog : Animal, IPet
    {
        public Dog(string name ) : base(name)
        {

        }
        public override void makesound()
        {
            Console.WriteLine("bark bark");
        }
        public void dance()
        {
            Console.WriteLine("I am a dancing dog");
        }
    }

    class Cat : Animal, IPet
    {
        public Cat(string name) : base(name)
        {

        }
        public override void makesound()
        {
            Console.WriteLine("meow meow");
        }
        public void dance()
        {
            Console.WriteLine("I am a dancing cat");
        }
    }

    class Robot : IPet
    {
        public void dance()
        {
            Console.WriteLine("I am a dancing robot");
        }
    }


}