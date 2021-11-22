use famtree;

INSERT INTO individuals (first_name, last_name, gender, date_of_birth, place_of_birth, other_details) VALUES
('Jonathan', 'Day', 'Male', '1982-08-19', 'Brownwood, TX', 'Created this database'),
('Freda', 'Day', 'Female', '1953-11-01', 'Early, TX', 'My mother');

INSERT INTO families (head_of_family_individual_id, family_name, family_description, family_date_from, other_family_details) VALUES
(1, 'Day', 'My direct family', '1932-09-11', 'My immediate family');

INSERT INTO relationship_types (relationship_type_description) VALUES
('Parent/Child'),
('Married'),
('Siblings');

INSERT INTO roles (role_type) VALUES
('Son'), ('Daughter'), ('Mother'), ('Father'), ('Brother'), ('Sister'), ('Cousin'),
('Aunt'), ('Uncle'), ('Grandmother'), ('Grandfather'), ('Grandson'), ('Granddaughter'),
('Husband'), ('Wife');

INSERT INTO relationships (family_id, individual_1_id, individual_2_id, relationship_type_id, individual_1_role, individual_2_role) VALUES
(1, 1, 2, 1, 1, 3);