DELETE FROM procedures;
DELETE FROM appointments;
DELETE FROM pets;
DELETE FROM owners;

INSERT INTO procedures (name)
VALUES ("Teeth Cleaning"),
("Ear Care"),
("Allergy Relief");

INSERT INTO owners (name, age, experience)
VALUES ("Emiley", 29, 7),
("Kailey", 23, 4),
("Carisa", 23, 4),
("Ayva", 17, 2);

INSERT INTO pets (name, age, breed, owner_id)
VALUES ("Apollo", 2, "Dog", 1),
("Daisy", 2, "Dog", 4),
("Bailey", 13, "Dog", 1),
("Dana", 4, "Dog", 2),
("Max", 3, "Dog", 3);

INSERT INTO appointments (date, doctor_name, pet_id, procedure_id)
VALUES ("November 23, 2024", "Dr. Bailey", 1, 2),
("November 23, 2024", "Dr. Bailey", 3, 3),
("November 21, 2024", "Dr. Gray", 4, 2),
("November 23, 2023", "Dr. Bailey", 3, 1),
("November 22, 2024", "Dr. Gray", 5, 2),
("November 23, 2022", "Dr. Bailey", 3, 1);