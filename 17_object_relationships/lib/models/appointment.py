class Appointment:
    all = []

    def __init__(self, pet, date, procedure):
        self.date = date
        self.pet = pet
        self.procedure = procedure

        Appointment.add_new_appointment(self)

    @classmethod
    def add_new_appointment(cls, new_appointment):
        cls.all.append(new_appointment)

    def __repr__(self):
        return f"<Appointment date={self.date} pet_name={self.pet.name} procedure_name={self.procedure.name}>"