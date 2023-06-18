# Tic Tac Toe

# Function to print the board
def print_board(board):
    print("-------------")
    for i in range(3):
        print("|", end=" ")
        for j in range(3):
            print(board[i][j], "|", end=" ")
        print("\n-------------")

# Function to check if any player has won
def check_win(board, player):
    # Check rows
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] == player:
            return True

    # Check columns
    for j in range(3):
        if board[0][j] == board[1][j] == board[2][j] == player:
            return True

    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] == player or board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False

# Function to play the game
def play_game():
    # Create an empty board
    board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]

    # Player symbols
    players = ['X', 'O']
    current_player = players[0]

    # Number of moves
    moves = 0

    while True:
        # Print the board
        print_board(board)

        # Get the current player's move
        row = int(input("Enter the row number (0-2): "))
        col = int(input("Enter the column number (0-2): "))

        # Check if the move is valid
        if board[row][col] == ' ':
            board[row][col] = current_player
            moves += 1
        else:
            print("Invalid move. Try again.")
            continue

        # Check if the current player has won
        if check_win(board, current_player):
            print_board(board)
            print("Player", current_player, "wins!")
            break

        # Check if the game is a draw
        if moves == 9:
            print_board(board)
            print("It's a draw!")
            break

        # Switch to the next player
        current_player = players[moves % 2]

# Start the game
play_game()

