import ipdb
# from models import Pet, Owner
from models.pet import Pet
from models.owner import Owner

apollo = Pet(name="Apollo", age=2, breed="Golden Retriever")
daisy = Pet(name="Daisy", age=2, breed="Golden Retriever")

em = Owner(name="Em", age=29)
ayva = Owner(name="Ayva", age=17)

ipdb.set_trace()