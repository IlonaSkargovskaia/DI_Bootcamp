#matrix

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]

print(matrix[1][1])

#    *   
#   ***  
#  ***** 
# *******
#    *   
#    *  

picture = [
    [0,0,0,1,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0]
]

for row in picture:
    for i in row:
        if i == 1:
            print('*', end="")
        else:
            print(" ", end="")       
    print('')


# find duplicates

some_list = ['a', 'b', 'b', 'd', 'f']

clear_list = list(set([item for item in some_list if some_list.count(item) > 1]))

print(clear_list)




