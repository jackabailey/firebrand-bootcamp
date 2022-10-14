using System;

namespace ObjectOrientedProgramming
{
    class Person : IComparable<Person>
    {
        //fields
        private string name = "";
        private int age = 16;

        // avoid providing uncontrolled access
        /* 
        public int Age
        {
            get {return age;}
            set {age = value;}
        }
        */
        public int Age() // getters
        {
            return age;
        }
        public void Age(int a) // setters
        {
            if( a < 0 )
            {
                age = 16;
            }else{
                age = a;
            }
            
        }
        //properties controlled access to private members
        public string Name() // getters
        {
            return name;
        }
        public void Name(string n) // setters
        {
            name = n;
        }

        //constructor
        public Person(string n, int a)
        {
            name = n;
            age = a;
        }


        public int CompareTo(Person otherperson){

            if(this.age < otherperson.age)
            {
                return 1;

            }else if(this.age > otherperson.age){
                return -1;
            }
            else{
                return 0;
            }
          
        }

    }




}