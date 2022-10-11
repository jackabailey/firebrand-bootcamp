# Manipulating files in python is easy...
import os
print(os.getcwd)



# Reading from Files


file_handle = open('zen_of_python.txt', 'r')

# We can read directly from the file, as one continuous string
content = file_handle.read()
print(type(content))
print(content)
file_handle.seek(0)

# Or we can read one line at a time
content = file_handle.readline()
print(type(content))
print(content)
file_handle.seek(0)

# Or we can read all lines, and dump them to a list
content = file_handle.readlines()
print(type(content))
print(content)
file_handle.seek(0)

content = file_handle.readlines()
# Create a list of strings which can be later read
unique_words = set() # Create a new set to store the group of unique words - There can only be one of each unique item in a set, remember.
for line in content: # For each item in the list
    line.strip()
    words_per_line = line.split(" ")
    for word in words_per_line:
        unique_words.add(word)
print(unique_words)


# Writing to files

file_handle.close() # Remember to close the file when you've finished

writable_file = open("mydoc.txt", 'w')

writable_file.write("This is Jack, \n writing directly to the file!\n")
writable_file.writelines("And here I am writing using the writeline function instead!")

writable_file.close()


# Appending files (CHANGING THE CONTENT)

appendable_file = open("zen_of_python.txt", 'a')

appendable_file.write("Editing files in Python!")

appendable_file.close()


# Deleting Files
# To delete files, we need to make use of the os module
os.remove("../mydoc.txt")

# Other flags can be found in the lesson notes for doing different things with files.