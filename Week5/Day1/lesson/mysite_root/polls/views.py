from django.shortcuts import render # this line is added automatically
# from django.http import HttpResponse # pass view information into the browser
from datetime import date


def posts(request):

    today = date.today()
    title = 'My first site'
    content = 'bla bla bla bla'
    author = 'Joe Doe'

    subscribers = ['Yossi', 'Michael', 'Evgeny', 'Ilona']
    
    context = {
        'time_key' : today,
        'title_key': title,
        'content_key': content,
        'author_key' : author,
        'subscribers_list': subscribers}
    
    return render(request, 'posts/posts.html', context)

def profile(request):
    username = 'John'
    age = 15
    hobbies = ['Tennis', 'Music', 'Computer games']

    context = {
        'name' : username,
        'age' : age,
        'hobbies_list' : hobbies,
        'gendre': 'F'

    }

    return render(request, 'posts/profile_user.html', context)


# def about(request):
#     return HttpResponse("<h1>Welcome Users</h1>")