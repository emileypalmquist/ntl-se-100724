import ipdb

from models.owner import Owner
from models.pet import Pet
from models.__init__ import CURSOR

# Owner.create_table()

# emiley = Owner(name='Emiley', age=29)
# emiley.save()
# emiley = Owner.create(name='Emiley', age=29)
# ayva = Owner.create(name='Ayva', age=17)
# carisa = Owner.create(name='Carisa', age=23)
# Owner.all()
owner = Owner.find_by_id(2)

Pet.create_table()

apollo = Pet.create(name="Apollo", age=2, breed='Dog', owner_id=1)
bailey = Pet.create(name="Bailey", age=11, breed='Dog', owner_id=1)
daisy = Pet.create(name='Daisy', breed='Fish', owner_id=2)

Pet.find_by_id(2)

ipdb.set_trace()
# Owner.drop_table()
Pet.drop_table()