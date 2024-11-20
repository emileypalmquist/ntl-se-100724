#!/usr/bin/env python3
import ipdb; 

"""
Swabts:
 - Create a new Python class
 - Give our new class methods
 - Pass new instances information during instantiation
 - Protect attributes with properties
"""


"""
Pet
    - name
    - age
    - breed
"""
#✅ 1. Create a Pet class
# pascal casing - first letter of each word is capitalized
class Pet:
    def __init__(self, name="cutie", age=0, breed="Unknown"):
        self.name = name
        self.age = age
        self.breed = breed

    def say_hello(self):
        print("Hello!")
    
    def print_pet_details(self):
        print("Pet info")
        print(f"name: {self.name}")
        print(f"age: {self.age}")
        print(f"breed: {self.breed}")
    
    def speak(self):
        if self.breed == 'Cat':
            print("Meow")
        elif self.breed == 'Dog':
            print("Woof")
        else:
            print("...silence")

apollo = Pet(name="Apollo")
daisy = Pet(age=2, breed="Dog")
rose = Pet(breed="Cat")

"""
Owner
    - name
    - age
"""

class Owner:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_name(self):
        return self._name
    
    def set_name(self, new_name):
        if type(new_name) == str:
            self._name = new_name
        else:
            print("name must be a str")

    name = property(get_name, set_name)

    def get_age(self):
        return self._age

    def set_age(self, new_age):
        if isinstance(new_age, int):
            self._age = new_age
        else:
            raise TypeError('Age must be an integer')

    age = property(get_age, set_age)

    def __repr__(self):
        return f"<Owner name={self.name} age={self.age}>"

em = Owner("Emiley", 29)