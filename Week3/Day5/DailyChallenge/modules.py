#Using the requests and time modules, create a function which returns the amount of time it takes a webpage to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.

from urllib.request import urlopen
from time import time

def time_for_load(site):
    website = urlopen(site)
    open_time = time()
    output = website.read()
    close_time = time()
    website.close()

    print('The loading time of website is',round(close_time-open_time,3),'seconds')


time_for_load('https://www.google.com/')
time_for_load('https://www.ynet.co.il/')