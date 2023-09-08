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