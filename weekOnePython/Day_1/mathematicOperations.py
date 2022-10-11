# Addition and Subtraction

print(1 + 1)
print(2 - 1)

# Multiplication

print(10 * 2)
print(100 * 3)

# Division
# There are different types of division in Python, and other languages. The operators will differ from one language to the next

# Divide
25 / 8 # Single / will divide, returning a floating point number
print(25 / 8)

# Integer Divide
25 // 8 # Returns the division, rounded down to the nearest whole number.
print(25 // 8)

# Modulo
25 % 8 # Returns the remainder of the division only.
print(25 % 8)

# Exponentiation
25 ** 3 # 25 to the power of 3, or 25 * 25 * 25
print(25 ** 3)


# A runtime error with data

# print("I am: " + 25)

# In other languages, the + sign will join a string and an integer together, and convert the number to a string.\
# This is NOT how Python works. Python doesn't allow joining of Integers and Strings
# In order for this to work, is to turn the integer into a String
age = 100
print("I am: " + str(age))
print(type(age))


# Operator presidence
print(15 + 4 * 3) # Will calculate 4 * 3, and then add 15 - = 27
# Make sure you use the correct order of operations to ensure the calculation is completed correctly to ensure no errors in your code occus
# USE BRACKETS WHEN NECESSARY to ensure your calculation is run in the correct order.

