# Looking at the DRY principles, and meeting them by using functions

# We use functions to seperate code into blocks which can be caled later, and reused over and over

# We can create a function
def my_function(toPrint):
    """
    Notice how the function has a parameter. In this instance the functions purpose is to print
    This is a very simple example, however functions can become very complex, and we can have many functions,
    called from within the main program, or another function, to break up our code and make it more modular.
    """

    print(toPrint)

# We can then call the function...

print(my_function("Hello There - I'm in a function"))
print(my_function("Hello There - I'm in a function again"))
print(my_function("Hello There - I'm in a function for a third time"))
print(my_function("Hello There - I'm in a function for the final time"))
# Notice how the same function can be called many times?
# This is quite a useless function but functions can be hundreds, if not thousands of lines


def calculation(num1, num2):
    add = num1 + num2
    mult = num1 * num2
    sub = num1 - num2
    div = num1 / num2
    mod = num1 % num2
    return (add, mult, sub, div, mod)

userinput1 = int(input("Pick A Number: "))
userinput2 = int(input("Pick Another Number: "))
print(calculation(userinput1, userinput2))
