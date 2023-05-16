
# The Pagination class will accept 2 parameters:

# items (default: None): It will contain a list of contents to paginate.
# pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)


# The Pagination class will have a few methods:

# getVisibleItems() : returns a list of items visible depending on the pageSize
# So for example we could use this method like this:

# p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# You will have to implement various methods to go through the pages such as:
# prevPage()
# nextPage()
# firstPage()
# lastPage()
# goToPage(pageNum)

# Here’s a continuation of the example above using nextPage and lastPage:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)

# p.getVisibleItems() 
# # ["a", "b", "c", "d"]

# p.nextPage()

# p.getVisibleItems()
# # ["e", "f", "g", "h"]

# p.lastPage()

# p.getVisibleItems()
# # ["y", "z"]

class Pagination:
    def __init__(self, items = None, pageSize = 10):
        self.items = items
        self.pageSize = int(pageSize)
        self.cur_page = 0
        self.totalPages = len(self.items) // self.pageSize + 1

    def getVisibleItems(self):
        first = self.cur_page * self.pageSize
        return self.items[first:first + self.pageSize]

    def nextPage(self):
        self.cur_page += 1
        self.cur_page = 0 if self.cur_page >= self.totalPages else self.cur_page  
        return self

    def prevPage(self):
        self.cur_page -= 1
        self.cur_page = (self.cur_page + self.totalPages) % self.totalPages  
        return self

    def firstPage(self):
        self.cur_page = 0
        return self

    def lastPage(self):
        self.cur_page = self.totalPages - 1
        return self

    def goToPage(self, pageNum):
        if pageNum < 1:
            pageNum = 1
        elif pageNum > self.totalPages:
            pageNum = self.totalPages
        self.cur_page = pageNum - 1
        return self


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(items = alphabetList, pageSize = 5)

print(p.getVisibleItems())
#['a', 'b', 'c', 'd', 'e']
p.nextPage()
print(p.getVisibleItems())
#['f', 'g', 'h', 'i', 'j']


