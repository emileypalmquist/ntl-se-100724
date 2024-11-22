from models.appointment import Appointment

class Procedure:
    def __init__(self, name, duration, cost):
        self.name = name
        self.duration = duration
        self.cost = cost

    def appointments(self):
        return [appt for appt in Appointment.all if appt.procedure == self]

    def pets(self):
        return [appt.pet for appt in self.appointments()]

    def __repr__(self):
        return f"<Procedure name={self.name}>"