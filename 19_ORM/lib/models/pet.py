from models.__init__ import CURSOR, CONN
from models.owner import Owner

class Pet:

    def __init__(self, name="Pet", age=0, breed='Unknown', owner_id=None, id=None):
        self.name = name
        self.age = age
        self.breed = breed
        self.owner_id = owner_id

    def __repr__(self):
        return f'<Pet name={self.name} owner_id={self.owner_id}>'

    def save(self):
        sql = """
            INSERT INTO pets (name, age, breed, owner_id)
            VALUES (?, ?, ?, ?);
        """
        CURSOR.execute(sql, (self.name, self.age, self.breed, self.owner_id))
        CONN.commit()

        self.id = CURSOR.lastrowid

    def owner(self):
        return Owner.find_by_id(self.owner_id)

    @classmethod
    def create(cls, name, age=0, breed="Unknown", owner_id=None):
        new_pet = cls(name, age, breed, owner_id)
        new_pet.save()
        return new_pet

    @classmethod
    def create_instance(cls, row):
        return cls(name=row[1], age=row[2], breed=row[3], owner_id=row[4], id=row[0])

    @classmethod
    def find_by_id(cls, id):
        sql = """
            SELECT * FROM pets
            WHERE id = ?
        """
        row = CURSOR.execute(sql, (id,)).fetchone()
        if row:
            return cls.create_instance(row)
        else:
            return None

    @classmethod
    def find_by_owner_id(cls, owner_id):
        sql = """
            SELECT * FROM pets
            WHERE owner_id = ?
        """
        pet_rows = CURSOR.execute(sql, (owner_id,)).fetchall()
        return [cls.create_instance(row) for row in pet_rows]
        # if row:
        #     return cls.create_instance(row)
        # else:
        #     return None

    @classmethod
    def create_table(cls):
        sql = """
            CREATE TABLE IF NOT EXISTS pets(
                id INTEGER PRIMARY KEY,
                name TEXT,
                age INTEGER,
                breed TEXT,
                owner_id INTEGER
            );
        """
        CURSOR.execute(sql)
        CONN.commit()

    @classmethod
    def drop_table(cls):
        sql = "DROP TABLE IF EXISTS pets;"
        CURSOR.execute(sql)
        CONN.commit()
