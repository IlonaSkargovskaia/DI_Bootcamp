#Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension

#1
first_str = "without,hello,bag,world"
result_str = ', '.join(sorted(first_str.split(',')))
print(result_str)

#2 List Comprehension
start_str = "without,hello,bag,world"
res_str = ', '.join(item for item in sorted(start_str.split(',')))
print(res_str)
    