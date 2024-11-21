#!/usr/bin/env python3

class Person:
    def __init__(self, name='Jane Doe', age=0):
        self.name = name
        self.age = age
        self.hygiene = 10

    @property
    def hygiene(self):
        return self._hygiene

    @hygiene.setter 
    def hygiene(self, new_hygiene):
        if new_hygiene >= 0:
            self._hygiene = new_hygiene

    @property
    def name(self):
        return self._name

    @name.setter 
    def name(self, new_name):
        if type(new_name) == str:
            self._name = new_name
        else:
            raise TypeError('Name must be of type str')

    def get_age(self):
        return self._age

    def set_age(self, new_age):
        if isinstance(new_age, int):
            self._age = new_age
        else:
            raise TypeError('Age must be an integer')

    age = property(get_age, set_age)

    def print_current_hygiene(self):
        print(f"Your current hygiene is now {self.hygiene}")
