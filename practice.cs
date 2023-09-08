//Farheneit to Celscius converter
using System;

class TemperatureConverter
{
    public static double FahrenheitToCelsius(double fahrenheit)
    {
        double celsius = (fahrenheit - 32) * 5/9;
        return celsius;
    }

    static void Main()
    {
        double fahrenheit = 98.6; // Replace this with the Fahrenheit temperature you want to convert
        double celsius = FahrenheitToCelsius(fahrenheit);
        Console.WriteLine($"{fahrenheit} degrees Fahrenheit is equal to {celsius} degrees Celsius.");
    }
}

//Favorite Color output
class Program
{
    static void Main()
    {
        string favoriteColor = AskForFavoriteColor();
        Console.WriteLine($"Your favorite color is {favoriteColor}.");
    }

    static string AskForFavoriteColor()
    {
        Console.Write("What is your favorite color? ");
        string color = Console.ReadLine();
        return color;
    }
}

//Hello World

namespace HelloWorld
{
    class Program {
        static void Main() {
            Console.WriteLine("Hello World")
        }
    }
}

//FizzBuzz
using System;

class Program
{
    static void Main()
    {
      for (int i = 0; i < 101; i = i + 1)
      {
        if(i % 3 == 0 && i % 5 == 0) {
          Console.WriteLine($"{i}, FizzBuzz");
        } else if (i % 3 == 0 ) {
          Console.WriteLine($"{i}, Fizz");
        } else if (i % 5 == 0 ) {
          Console.WriteLine($"{i}, Buzz");
        } else {
          Console.WriteLine($"{i}" );
        }
      } 
    }
}

//Fibbonachi Sequence
using System;
using System.Collections.Generic;

class Program
{
    static void FibonacciSequence(int startNumber1, int startNumber2)
    {
        List<int> numbersToUse = new List<int> { startNumber1, startNumber2 };

        // Generate and store the first 10 numbers in the sequence
        for (int i = 0; i < 9; i++)
        {
            int result = numbersToUse[i] + numbersToUse[i + 1];
            numbersToUse.Add(result);
        }

        // Print the numbers
        foreach (int number in numbersToUse)
        {
            Console.WriteLine(number);
        }
    }

    static void Main()
    {
        int startNumber1 = 0;
        int startNumber2 = 1;

        FibonacciSequence(startNumber1, startNumber2);
    }
}


class Program {
    static void Main() {
        int number = 5;
        bool result = isOddOrEven(number);
    }

    static bool isOddOrEven(number) {
        if(number % 2 == 0) {

        }
    }
}


