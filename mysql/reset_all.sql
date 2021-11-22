-- THIS WILL ERASE ALL OF THE DATA IN ALL TABLES IN YOUR DATABASE --
-- ********************* USE WITH CAUTION!!! ******************** --

use famtree;
DROP DATABASE famtree;
CREATE DATABASE famtree;
use famtree;

CREATE TABLE individuals (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    gender VARCHAR(255),
    date_of_birth DATE,
    place_of_birth VARCHAR(255),
    other_details VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE families (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    head_of_family_individual_id INT,
    family_name VARCHAR(255),
    family_description VARCHAR(255),
    family_date_from DATE,
    family_date_to DATE DEFAULT CURDATE(),
    other_family_details VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY(head_of_family_individual_id) REFERENCES individuals(id)
);

CREATE TABLE relationship_types (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    relationship_type_description VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_type VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE relationships (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    family_id INT,
    individual_1_id INT,
    individual_2_id INT,
    relationship_type_id INT,
    individual_1_role INT,
    individual_2_role INT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (family_id) REFERENCES families(id),
    FOREIGN KEY (individual_1_id) REFERENCES individuals(id),
    FOREIGN KEY (individual_2_id) REFERENCES individuals(id),
    FOREIGN KEY (relationship_type_id) REFERENCES relationship_types(id),
    FOREIGN KEY (individual_1_role) REFERENCES roles(id),
    FOREIGN KEY (individual_2_role) REFERENCES roles(id)
);