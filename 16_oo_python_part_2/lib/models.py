#!/usr/bin/env python3
import ipdb; 

"""
SWABATs:
    - Demonstrate Decorators 
        - `@property`
    - Demonstrate class variables
        - Defining class variables
        - Updating class variables 
    - Demonstrate class methods
        - Defining class methods 
        - `@classmethod`
        - `cls keyword`
    - Object Inheritance
    - Stretch Goals
        - Super
        - Creating a decorator
"""

class Pet:
    def __init__(self, name="Pet", age=0, breed='Unknown'):
        self.name = name
        self.age = age
        self.breed = breed

    def hello(self):
        print('Hello')

    def speak(self):
        if self.breed == 'Dog':
            print('Bark')
        elif self.breed == 'Cat':
            print('Meow')
        else:
            print('...silence')

    def __repr__(self):
        return f'<Pet name={self.name}>'


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
            raise TypeError('Name must be of type str')
    
    name = property(get_name, set_name)

    def get_age(self):
        return self._age

    def set_age(self, new_age):
        if isinstance(new_age, int):
            self._age = new_age
        else:
            raise TypeError('Age must be an integer')

    age = property(get_age, set_age)



class Person:
    def __init__(self, name='Jane Doe', age=0):
        self.name = name
        self.age = age
        self.hygiene = 10

    def print_current_hygiene(self):
        print(f"Your current hygiene is now {self.hygiene}")
