"""
    A Basic CLI-based Game of Rock Paper Scissors
    Includes functions, loops, conditional statements and user input
    
    - Rock crushes Scissors
    - Scissors cuts Paper
    - Paper covers Rock
    
    If both players choose the same item, the game is a tie
"""

import random

def rock_paper_scissors():
    """
    The game function itself
    
    - Rock crushes Scissors
    - Scissors cuts Paper
    - Paper covers Rock
    
    This function takes a user's input, chooses a random item from the computer, and determines a winner.
    """
    print()
    player_choice = input('Choose Rock (R), Paper (P) or Scissors (S) ').capitalize()
    computer_choice = random.randint(0, 2)

    # Check for win
    if player_choice == choice[computer_choice]:
        print('TIE!')
    if player_choice == 'R' and choice[computer_choice] == 'P':
        print('the Computer\'s Paper smothered the User\'s Rock! Computer Wins!')
        return 0
    elif player_choice == 'P' and choice[computer_choice] == 'S':
        print('the Computer\'s Scissors shredded the User\'s Paper! Computer Wins!')
        return 0
    elif player_choice == 'S' and choice[computer_choice] == 'R':
        print('the Computer\'s Rock smashed the User\'s Scissors! Computer Wins!')
        return 0
    elif player_choice == 'P' and choice[computer_choice] == 'R':
        print('the User smothers the Computer\'s paper! User Wins!')
        return 1
    elif player_choice == 'S' and choice[computer_choice] == 'P':
        print('the User shreds the Computer\'s Paper! User Wins!')
        return 1
    elif player_choice == 'R' and choice[computer_choice] == 'S':
        print('the User smashes the Computer\'s Scissors! User Wins!')
        return 1
    
# Data
# print("Generating Data")
choice = ['R', 'P', 'S']
user_win_count = 0
computer_win_count = 0

#print("Playing Game")
win = rock_paper_scissors()
if win == 0:
    #print("Computer Win")
    computer_win_count += 1
else:
    #print("User Win")
    user_win_count += 1

#print("Play Again")
again = ''
while again != 'Y' or 'N': 
    print()
    again = input('Play again? Y/N ')
    again = again.capitalize()
    if again == 'Y':
        #print("Playing Again")
        rock_paper_scissors
    elif again == 'N':
        print("By the end of your game, the User won {} Games, and the Computer won {} Games!".format(user_win_count, computer_win_count))
        exit
    else:
        print("Invalid Choice")