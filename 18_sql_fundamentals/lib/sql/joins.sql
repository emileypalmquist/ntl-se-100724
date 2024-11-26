SELECT pets.name, owners.name FROM pets
JOIN owners ON pets.owner_id = owners.id
WHERE owners.id = 1;


SELECT appointments.id, appointments.date, appointments.doctor_name, pets.name, procedures.name FROM appointments
JOIN pets ON appointments.pet_id = pets.id
JOIN procedures ON appointments.procedure_id = procedures.id;