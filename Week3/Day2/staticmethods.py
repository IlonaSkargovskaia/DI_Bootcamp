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