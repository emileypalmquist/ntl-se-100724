from models.person import Person

class Owner(Person):
    all = []

    def __init__(self, name, age):
        super().__init__(age=age, name=name)

        Owner.add_new_owner(self)

    @classmethod
    def add_new_owner(cls, new_owner):
        cls.all.append(new_owner)