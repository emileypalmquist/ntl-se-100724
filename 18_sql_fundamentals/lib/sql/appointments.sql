CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY,
    date TEXT,
    doctor_name TEXT,
    pet_id INTEGER,
    procedure_id INTEGER
);

INSERT INTO appointments (date, doctor_name, pet_id, procedure_id)
VALUES ("November 23, 2024", "Dr. Bailey", 1, 2),
("November 23, 2024", "Dr. Bailey", 3, 3),
("November 21, 2024", "Dr. Gray", 4, 2),
("November 23, 2023", "Dr. Bailey", 3, 1),
("November 22, 2024", "Dr. Gray", 5, 2),
("November 23, 2022", "Dr. Bailey", 3, 1);