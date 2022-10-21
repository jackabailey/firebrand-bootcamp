namespace Calculator {
    class Mathematics {
        // Polymorphic methods - They are used because we can't always trust what the user is going to give us.
        // We have multiple methods with the same name so we need not reject what the used has given us
        public int Addition(int numberOne, int numberTwo)
        {
            return numberOne + numberTwo;
        }
        public float Addition(float numberOne, float numberTwo)
        {
            return numberOne + numberTwo;
        }
        public decimal Addition(decimal numberOne, decimal numberTwo)
        {
            return numberOne + numberTwo;
        }
    }
}