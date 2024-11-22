from models.appointment import Appointment

class Pet:
    all = []

    def __init__(self, owner, name="Pet", age=0, breed='Unknown'):
        self.name = name
        self.age = age
        self.breed = breed
        self.owner = owner

        Pet.add_new_pet(self)

    @classmethod
    def add_new_pet(cls, new_pet):
        cls.all.append(new_pet)

    @classmethod
    def total_count(cls):
        return len(cls.all)

    def speak(self):
        if self.breed == 'Dog':
            print('Bark')
        elif self.breed == 'Cat':
            print('Meow')
        else:
            print('...silence')

    def appointments(self):
        return [appt for appt in Appointment.all if appt.pet == self]

    def procedures(self):
        return [appt.procedure for appt in self.appointments()]

    def __repr__(self):
        return f'<Pet name={self.name}>'
