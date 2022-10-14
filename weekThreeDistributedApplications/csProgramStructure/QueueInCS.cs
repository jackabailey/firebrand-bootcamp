using System;
using System.Collections;

namespace DataStructure
{
    class QueueinCS {
        static void Main(String[] args){
            Queue myQueue = new Queue();
            myQueue.Enqueue("Mary");
            myQueue.Enqueue(35.50);
            myQueue.Enqueue(true);
            myQueue.Enqueue(10);

            Console.WriteLine(myQueue.Dequeue());
            Console.ReadLine();
        }
    }
}