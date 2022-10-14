using System;

namespace ObjectOrientedProgramming
{
    abstract class Food
    {

        //Data members
        protected string name = "";
        protected internal double price = 0.0;
        private protected double cost = 0.0;

        public Food()
        {
            price = 23;
        }
        public Food(string fname, double fprice, double fcost)
        {
            this.name = fname;
            this.price = fprice;
            this.cost = fcost;
        }
        
        public double CalculateProfit()
        {
            double profit = price - cost;
            return profit;
        }

    }


}