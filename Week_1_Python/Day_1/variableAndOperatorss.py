 # Variables are used to store informatioon within our program.
 
fname = input("Please enter your first name: ")
mname = input("Please enter your middle name: ")
lname = input("Please enter your last name: ")

print("Your full name is: " + fname + " " + mname + " " + lname)


# Variable assignment with arithmetic
firstNumber = 10
print(firstNumber)
firstNumber += 1 # Increases the value of firstnUMBER BY 1
print(firstNumber)
firstNumber /= 5
print(firstNumber)

# This is much more efficient and quicker to type than:
firstNumber = firstNumber + 1

age = int(input("Please enter your age: "))
# We can increase age by 5 without actually knowing what the value of age is
age += 5
print(age)


# Comparison
# Comparison governs the flow of the program

1 == 1 # Equal to
1 !=- 2 # Not Equal
1 < 4 # Less Than
1 > 4 # Greater Than
1 <= 5 # Less than or Equal to
1 >= 5 # Greater than or Equal to

print(12 == 12) # True
print(12 != 12) # False
print(12 < 12) # False
print(12 > 12) # False
print(12 <= 12) # True
print(12 >= 12) # True

# AND - If one side is false, the entire expression is false
print(True and True) # True
print(True and False) # False
print(False and True) # False
print(False and False) # False

# OR - If once or both sides is true, the entire expression is true
print(True or True) # True
print(True or False) # True
print(False or True) # True
print(False or False) # False

# NOT - Flips the truth
print(not False) # True
print(not True) # False
