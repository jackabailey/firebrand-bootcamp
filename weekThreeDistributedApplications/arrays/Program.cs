int[] numbers = new int[10]; // all ten zeros            numbers[5] = 15;
            numbers[9] = 23;
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine("index is {0} value {1}",i,numbers[i]);
            }
            float[] floats = new float[10];
            for (int i = 0; i < floats.Length; i++)
            {
                Console.WriteLine("index is {0} value {1}", i, floats[i]);
            }
            double[] doubles = new double[10];
            for (int i = 0; i < doubles.Length; i++)
            {
                Console.WriteLine("index is {0} value {1}", i, doubles[i]);
            }