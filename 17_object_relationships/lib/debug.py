import ipdb

from models.owner import Owner
from models.pet import Pet
from models.appointment import Appointment
from models.procedure import Procedure

emiley = Owner(name='Emiley', age=29)
ayva = Owner(name='Ayva', age=17)

apollo = Pet(name="Apollo", age=2, breed='Dog', owner=emiley)
daisy = Pet(name='Daisy', breed='Fish', owner=ayva)
bailey = Pet(name="Bailey", age=13, breed="Dog", owner=emiley)

pro1 = Procedure(name="Teeth cleaning", duration="6 hours", cost=1000)
pro2 = Procedure(name="Vaccine", duration="30 minutes", cost=20)

app1 = Appointment(pet=bailey, date="November 22,2024", procedure=pro1)
app2 = Appointment(pet=bailey, date="November 22,2023", procedure=pro2)
app3 = Appointment(pet=bailey, date="November 21,2023", procedure=pro1)
app4 = Appointment(pet=apollo, date="January 2,2023", procedure=pro2)

ipdb.set_trace()