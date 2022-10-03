# Collections of Data

# List

print("-------------------------LIST--------------------------")

empty_list = list() # Creates an empty list, []
print(empty_list)

number_list = [1, 3, 5, 7, 9, 11, 13, 15] # Single-type list
print(number_list)

string_list = ["Hello", "Hola", "Bonjour"]
print(string_list)

mix_list = ["Henry", 35, 12.7, False] # Multi-type list
print(mix_list)

print(type(mix_list))

list_wiithin_list = [1, 2, "Hello", 33, False, [1, 2, 3, 4, [45, 67, 8.39, 28.2]]]

# We can use the element index to grab an item from within this list

print(list_wiithin_list[4]) # False
print(list_wiithin_list[5][4][0]) # 45

for i in list_wiithin_list:
    print(i)
    
# Converting a string to a list
string = "Hello There"
string_list = list(string)
print(string_list)

# List indexes and slicing
my_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
# THis collection has 26 items, one for each letter of the alphabet.
# remember elements start at index 0.

# To grab a single element from the list:
print(my_list[7]) # This will be letter 'h', the 8th letter of the alphabet
print(my_list[0:8]) # This will display all letters from 'a' to 'h' - Notice how the 9th letter is not included.
print(my_list[:10]) # This will display all items in the list, from the beginning to the 9th element
print(my_list[10:]) # This will display all items in the list, from the 10th element to the end (inclusive)
print(my_list[0:26:2]) # This will display every other item in the list, from the beginning to the end
# ^ Notice how above, this works even though there are only 25 items in the list. This is because there must be a contingency for selecting the last element in the list
print(my_list[0:27:2]) # However, you can keep increasing this item.
print(my_list[4:-1]) # Gets the entire list, from item 4, not inclusive of the last item

# Special Selection Case - Reverse List Order
print(my_list[::-1]) # This will display all items in the list, in reverse order.

# Get the length of the list
print(len(my_list))

# Operations on a list
my_list.append(':') # Add an element to the end of the list
my_list.copy() # Return a copy of the list
my_list.count('a') # Return the number of elements with a specified value
my_list.extend(my_list) # Adds the elements of a list to the end of the current list (merge)
my_list.index('a') # Returns the index of the first element with the specified value
my_list.insert(0, ':') # Adds an element in a specified position
my_list.pop(0) # Removes the element in the the specified location
my_list.reverse() # Reverses the order of the list
my_list.sort() # Sorts the list in numerical, ascending order - It will also sort alphabetically. Returns None. Will sort using unicode characters
my_list.clear() # Clear the entire list


# Tuple
print("-------------------------TUPLE--------------------------")
my_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
my_names = ("Jamie", "John", "Dave", "Dana")

# You can move between a list and tuple by doing this:
print(type(my_tuple))
tuple_to_list = list(my_tuple)
print(type(tuple_to_list))
list_to_tuple = tuple(tuple_to_list)
print(type(list_to_tuple))
# my_names.append("Donna") Uncomment to see that this doesnt work because tuples cannot be modified once created.
print(my_names)

# With a tuple you can grab a set of items and put them individually into variables, like so:
firstname, lastname, postcode = ("Jonathan", "Jamieson", "LD3 5GD")
print(firstname)
print(lastname)
print(postcode)
# or...
my_details = ("Gary", "Garrickson", "AY6X 6HA")
fname = my_details[0]
lname = my_details[1]
pcode = my_details[2]
print(fname)
print(lname)
print(pcode)
# or......
my_new_details = ("Derrek", "Dominson", "DB36 7BX")
first, last, post = my_new_details
print(first)
print(last)
print(post)


# Set
print("-------------------------SET--------------------------")
empty_set = {}
empti_set = set()

# Curly braces are used to define sets
# In the below, error_set, the numbers 1 and 2 are converted to a string to allow this set to be valid, hence why
# There is a '' around each letter in the print of this set.
error_set = {1, 2, 'a', 'b'}
print(error_set)
my_set = {"Apple", "Orange", "Orange", "Lime", "Lemon", "Pear", "Dragonfruit", "Kiwi"}
my_set_large = {"Dragonfruit", "Kiwi", "Citrus", "Dates", "Grapes", "Gooseberry"}
print(my_set) # Notice how the duplicate value '7' is not shown when printing

# Operations on a set
my_set.add("Pineapple") # Add an item to a set
print(my_set)

my_set_copy = my_set.copy() # Copy the set
print(my_set_copy)

my_set.difference(my_set_large) # Returns a set containing the difference between two or more sets
print(my_set.difference(my_set_large))

my_set.discard("Orange") # Discards a specified item
print(my_set)

intersect_set = my_set.intersection(my_set_large) # Returns a set, which is the intersection of two other sets. ie. What exists in both
print(intersect_set)

my_set.issubset(my_set_large) # Returns whether another set contains this set or not
print(my_set.issubset(my_set_large))

my_set.pop() # Removes an element from the set (From the front)
print(my_set)

my_set.remove("Apple") # Removes the specified element from the set
print(my_set)

union_set = my_set.union() # Returns a set containing union sets - Every set, combined
print(union_set)

my_set_large = my_set.update(my_set_large) # Update the set with the union of this set and others - Give multiple sets to join together / unionise
print(my_set_large)

my_set.clear() # Remove all elements from the set


# Dictionary 
print("-------------------------DICTIONARY--------------------------")
empty_dictionary = dict()
print(empty_dictionary)

string_dictionary = {"Title":"Mr", "FirstName":"Jon", "Surname":"Doe"}
print(string_dictionary)
print(string_dictionary.keys())
print(string_dictionary.values())
print(string_dictionary.items())

# Operations in Dictionaries
#* string_dictionary.clear() # Clears the dictionary
str_dict_copy = string_dictionary.copy() # Copies the dictionary
dictionary_keys = string_dictionary.fromkeys('Mr') # Create a new dictionary with keys from iterable and values set to value.
print(dictionary_keys)
string_dictionary.get("Title") # Gets the value tied to the key specified
print(string_dictionary)
string_dictionary.pop("Title") # Removes the item with the specified key
print(string_dictionary)
string_dictionary.popitem() # Removes the last inserted key-value pair
print(string_dictionary)
string_dictionary.setdefault("Title", "Mr") # Returns the value of the specified key. If the key doesn't exist, add the key eith the specified value
print(string_dictionary)
string_dictionary.update() # Updates the dictionary with the specified key-value pair

print(len(string_dictionary)) # len gets the length of the dictionary

# Using Zip to pair a list to a dictionary
list_keys = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
list_values = ["Pear", "Pineapple", "Apple", "Orange", "Lemon", "Lime", "Dragonfruit"]

list_dictionary = dict(zip(list_keys,list_values))
print(list_dictionary)


# Compound Data Structures
# Here, there are lists within the dictionary, so we can store a lot more data. This is an example which could be used in a shop
first_dictionary = {"items":{"Screwdriver", "Screws", "Hammer", "Nuts", "Bolts"}, "price":{48.99, 0.99, 19.99, 0.29, 0.69}}
print(first_dictionary.keys())
print(first_dictionary.values())
print(first_dictionary.get("items"))
print(first_dictionary.get("price"))

 
# Commenting

# Single line comments are created with a #

def doathing(str):
    """
    This is a DocString. It is a multi line comment which explains a piece of code or the entire file
    A comment can be run:
    pydoc -w myproject
    Which will create an oldschool HTML document with all the documentation you've included in the code
    """
    print("m")
    
# MY PERSONAL VSCODE COMMENTS
# ? Question
# ! Alert
# * Important
# TODO: To Do List

