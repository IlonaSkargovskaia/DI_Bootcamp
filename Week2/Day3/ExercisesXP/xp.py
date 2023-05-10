#Convert the two following lists, into dictionaries.

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

zip_list = zip(keys, values)
print(dict(list(zip_list)))