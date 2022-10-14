using System;

namespace ObjectOrientedProgramming
{
    class Pizza : Food
    {
        

        //Methods
        //Constructor special method with same name as the class no return type 
        // next to its name
        private string crust = "";
        public Pizza():base()
        {
            
        }
        public Pizza(string name, double price, double cost,string crust):base(name,price,cost)
        {
           this.crust = crust;
        }

       
        

    }


}