#!/usr/bin/env python3
import ipdb 
from models.pet import Pet

class Owner:
    def __init__(self, name, age, experience=0):
        self.name = name
        self.age = age
        self.experience = experience

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, new_name):
        if type(new_name) == str:
            self._name = new_name
        else:
            raise TypeError('Name must be of type str')

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, new_age):
        if isinstance(new_age, int):
            self._age = new_age
        else:
            raise TypeError('Age must be an integer')

    def pets(self):
        # all_pets = []

        # for pet in Pet.all:
        #     if pet.owner == self:
        #         all_pets.append(pet)

        # return all_pets

        return [pet for pet in Pet.all if pet.owner == self]

    def pet_appointments(self):
        appt = []
        for pet in self.pets():
            # appt += pet.appointments()
            appt.extend(pet.appointments())
        return appt

    def total_bill(self):
        total = 0
        for pet in self.pets():
            for pro in pet.procedures():
                total += pro.cost

        return total

    def __repr__(self):
        return f"<Owner name={self.name}>"