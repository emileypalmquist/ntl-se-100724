CREATE TABLE IF NOT EXISTS pets (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    breed TEXT,
    owner_id INTEGER
);

INSERT INTO pets (name, age, breed, owner_id)
VALUES ("Apollo", 2, "Dog", 1),
("Daisy", 2, "Dog", 4),
("Bailey", 13, "Dog", 1),
("Dana", 4, "Dog", 2),
("Max", 3, "Dog", 3);