class Student:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"Students name is {self.name} and his {self.age} old" 
    
    @staticmethod
    def check_grade(grade):
        if grade > 80:
            return "A"
        else:
            return "B"
    
    @classmethod
    def create_high_school_student(cls, age): #cls = this class inside Students
        if age >= 15:
            new_student = cls("Emma", age) #= Student("Emma", age)
            return new_student
    
#static method - дает функции фичи без изменения ее самой

stud1 = Student("John", 13)
print(Student.check_grade(80)) #all class


#classmethod
# modify class attribute
# create new objects

#вызываем класс-метод - похож на self у объекта только для класса
stud = Student.create_high_school_student(17) #Students name is Emma and his 17 old
print(stud)


class Student_TLV(Student):
    city = "TLV"

studTlv = Student_TLV.create_high_school_student(16)
print(studTlv)
print(studTlv.city)




#декораторы класса

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def get_info(self):
        print(f"{self.name} - {self.email}")

    @classmethod
    #передали лист в качестве данных принимаемых классом
    def get_info_class(cls, data):
        name, email = data
        return cls(name, email)
    
    @staticmethod
    #не видит класс, и мы не можем обратиться напрямую к self
    #нужно передать объект к которому применится этот метод
    def get_info_static(self):
        print(f"{self.name} - {self.email}")


user_list = ["Admin2", "test@test.com"]
#присваиваем объекту список через метод @classmethod
user = User.get_info_class(user_list)
#вызываем функцию принт для объекта user
user.get_info() #Admin2 - test@test.com
#передаем объект в статикметод чтобы он сработал
user.get_info_static(user) #Admin2 - test@test.com


