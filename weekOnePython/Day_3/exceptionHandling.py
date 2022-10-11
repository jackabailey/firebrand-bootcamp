"""

Exception handling allows a developer to catch potential issues ... 
before they crash a program, and handle them effectively

This could be by trying the block again, exiting the program maturely or ... 
continuing the execution of the program without the block of code within the try block
try, except, finally, raise, else

"""

def test_div_0():
    """ A function to test some different types of exception within pythonb """
    
    try: # Attempt to run a block of code which may throw an error
        #5 // 0
        #print(xample_vnonexistant_variable)
        #list = [1, 2, 3]
        #list[3] = 4
        #int("2.1")
        print("Error Testing")
        x = 1
        if x == 1:
            print(" x = 1 ")
            # You can raise your own exception to cause your own crash. This can be used to prevent access for ex.
            # raise SyntaxError
            # This is mostly usable when you write your own exception cases to handle issues which may not be in
            # The original scope of python.
    except ZeroDivisionError as zde: # Can't divide by 0
        # We can either use except, or except with the type of error
        # This depends on if we know what error will occur or not
        return zde
    except NameError as ne_e: # Can't use a non-existant variable
        return ne_e
    except IndexError as ie_e: # Can't access an out-of-range index
        return ie_e
    except ValueError as ve_e: # Can't convert a float to an int
        return ve_e
    
    else: # If all is well and there are no errors caught ... 
        print("All is going well in the mind of the computer")
        
    finally: # After we have run the code in the try block, this code will be run regardless ...
             # of if an exceoption was caught
        # Examples of finally-block code is closing a file which we tried to open, or clearing memory from variables.
        print("This code runs regardless of if an error has been caught or not")

print(f"Returned {test_div_0()}")                              