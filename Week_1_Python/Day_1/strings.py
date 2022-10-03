# String variables

fname = input("Please enter your first name: ")
mname = input("Please enter your middle name: ")
lname = input("Please enter your last name: ")

print("Your full name is: " + fname + " " + mname + " " + lname)

fullname = fname + " " + mname + " " + lname
print(fullname)
newname = fullname.upper()
print(newname)

# Strings cannot be edited. This means that if we want to make a string uppercase, we need to store it in a new place.
# THis is also known as immutable.

print(fullname[1]) # This will print the second character of the string
# REMEMBER that computer start counting from 0. This applies to arrays, strings (which are lists of letters), etc.

# We can also gety the last value of the wstring, or count from the end by using -1, -2 etc.
print(fullname[-1])

age = 19

# Making Strings Pretty!

# Format Method
myString = "Your friend, {} is {} Years Old Today!"
print(myString.format(fullname, age))

# String formatting functions:
example_string = "hello there, JACK, how are YOU today?"

print(example_string.capitalize()) # Makes the first character in the string uppercase
print(example_string.casefold()) # Makes the entire string into lowercase
print(example_string.center(50)) # Aligns the string to the center of the given number of characters
print(example_string.count("e")) # Count the occurence of a particular character in the string
print(example_string.encode()) # DIsplays the string in its encoded version
print(example_string.endswith("?")) # Returns TRUE if the string ends with the given character, false if no.title()
print(example_string.expandtabs(2)) # Replaces the default tab size (8) ith the given number of whitespace. Only works with \t in the string
print(example_string.find("JACK")) # Search the string from the left to find the given string. If found, returns the position, if not, returns -1
print("INFO: {}".format(example_string)) # Allows the insertion of other strings or formats within your string
print(example_string.index("JACK")) # Returns the position of occurence of the given string. Throws error if not found
print(example_string.isalnum()) # Determines if all characters in a string are numbers
print(example_string.isalpha()) # Determines if all the characters in the string are alphabets, including spaces
print(example_string.isdecimal()) # Determines if all the characters in the string are decimals
print(example_string.isidentifier()) # Determines if the string is a valid identifier (ie. Variable name, Function name)
print(example_string.islower()) # Determines if all the characters in the string are lower case or not
print(example_string.isnumeric()) # Determines if all the characters in the string are numeric, inlcluding fractions and exponents
print(example_string.isprintable()) # Determines if the characters in the given string are printable or not. ie. \n and \t are NOT printable
print(example_string.isspace()) # Determines if all the characters in a given string are white spaces
print(example_string.istitle()) # Determines if the string follows the set of rules to be determined a title
print(example_string.title()) # Turns the string into a valid title
print(example_string.isupper()) # Determines if all the characters of the string are in upper case
print(example_string.upper()) # Converts the entire string to uppercase
# print(string.join()) # Concatenates two strings in an iterated manner# 