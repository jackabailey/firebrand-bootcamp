# If / Else If / Else

my_number = input("Pick a number: ")
number_int = int(my_number)

if number_int == 9: # If...
    print("Your number is 9")
elif number_int >= 10: # Else if...
    print("Your number is greater than, or equal to 10")
else: # Else
    print("Your number is below 10, and is not 9")
    
# We can use OR or AND to merge multiple conditions together and shrink the number of statements we need in some cases.

# Nested If
# Nested if's are horrible and shouldn't be used, but sometimes are and it's good to know they exist
if my_number == 1 or 2 or 3:
    if my_number == 1 or 2:
        if my_number == 1:
            print("Your number is 1")
        if my_number == 2:
            print("Your number is 2")
    if my_number == 3:
        print("Your number is 3")
else:
    print("Your number is not 1, 2, or 3")
    
# This can be simplified vastly, to a statement like:

if my_number != 1 or 2 or 3:
    print("Your number is not 1, 2, or 3")
else:
    print("Your number is" + str(my_number))
    
    

# For and While

# For Loops
# For Loops iterate over a number of specified items, for example the length of a list, or a specified number
# For <variable> in <iterable>
iterable_item = [1, 2, 3, 4]
for x in iterable_item:
    print(x)
    
#! An interable item is any of the following:
    #? List
    #? Tuple
    #? String
    #? Set
    #? Dict
#! Integers and Floats are NOT iterable!

# It is possible to iterate over a set number of items, but as an integer isn't iterable, we need another way to do this:
# We use range() for this
for x in range(6, 9):
    # This loop will run for 10 times, from 0 to 9, with the first number being inclusive, and the second number being exclusive
    print(x)
    
# While Loops
# Loops which will continue to iterate until a condition is met.

x = 1
while x != 5:
    print(x)
    x += 1
    # This iterative loop will run while ever x is not equal to 5.
    # x starts at 1, and increases each time the loop runs, until it reaches 5, and the loop terminates.
    

# Breaking out of loops early - Run the program to see this in action

#! Continue
number = 0
for number in range(10):
    if number == 5:
        continue    # Continue here, breaking out of the loop and moving on to the next iteration in the loop
    print('Number is ' + str(number))
print('Out of loop')
print()

#! Break
number = 0
for number in range(10):
    if number == 5:
        break    # Break here, stopping the current loop iteration from running and breaking out of the loop
    print('Number is ' + str(number))
print('Out of loop')
print()

#! Pass
number = 0
for number in range(10):
    if number == 5:
        pass    # Pass here - Ignoring that the if statement ever existed
    print('Number is ' + str(number))
print('Out of loop')

print() 

# Real world examples of for loops
# Dictionary with a for loop
my_dict = {"name": "James", "department": "IT", "salary": 32454, "age": 24}
for key in my_dict:
    print(key)

# Nested Loops
rows = 5
cols = 9
for i in range(1, rows + 1):
    for j in range(1, cols + 1):
        print(str(i) + "," + str(j), end=" -- ") # Using end, we can prevent the default new line and instead add a blank space.
        
        
# Modifying a list with a for loop
cities = ["moscow", "london", "paris", "washington"]
capitalised_cities = []

for city in cities:
    capitalised_cities.append(city.title()) # .title will force the first letter of the string to become uppercase

print()
print(cities)
print(capitalised_cities)