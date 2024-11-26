-- Both delete and drop not required choose one
-- delete all rows from the owners table
DELETE FROM owners;

-- Drop owners table from db
DROP TABLE IF EXISTS owners;

CREATE TABLE IF NOT EXISTS owners (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    experience INTEGER
);

INSERT INTO owners (name, age, experience)
VALUES ("Emiley", 29, 7),
("Kailey", 23, 4),
("Carisa", 23, 4),
("Ayva", 17, 2);

SELECT * FROM owners;

SELECT id, name, age FROM owners;

SELECT * FROM owners
WHERE id = 3;

SELECT * FROM owners
WHERE age > 22;

-- UPDATE owners
-- SET age = 24
-- WHERE id = 2 OR id = 3;

UPDATE owners
SET age = 24
WHERE id IN (2,3,10,12,15);


-- DELETE FROM owners
-- WHERE name = "Emiley";