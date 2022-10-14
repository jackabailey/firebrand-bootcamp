using System;

namespace ObjectOrientedProgramming
{
    sealed class Drink : Food
    {
        //Data members
        
        public Drink()
        {

        }
        public Drink(string dname, double dprice, double dcost )
        {
            this.name = dname;
            this.price = dprice;
            this.cost = dcost;
        }
       


    }





}