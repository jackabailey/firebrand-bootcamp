# Python data types:

# Integer Data Types
sticks = 187
stones = 22

# Float data types
kilograms = 19.191
csalaqry = 12454.42

# String
word = "oranges"
letter = "a"
phrase = "Hello there Python"
# Sometimes with strings, we want to use quoters or apostraphies, eg.
multiquote = "Hello there. Marissa's Date is today. \"This is an example of where quotes may be used inside other quotes. here we use the backslash.\" "

# Boolean
tr = 1
fl = 0
t = True
f = False

# Lists - Mutable groups of items (Where items can be added or removed)
listOfStrings = ["Hello", "Goodbye", "Happy", "Sad"]
listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 298]

# Arrays - These require an external module. ou must declare using array.array(typecode, [listofitems])
import array
arrayOfNumbers = array.array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


# You can print the data type of a variable using print
print(type(165))
print(type("Hello"))
print(type(listOfNumbers)) 

# We can also use the name of a veriable to print the type of that variable
print(listOfStrings)