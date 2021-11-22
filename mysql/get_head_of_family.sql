use famtree;

SELECT CONCAT(individuals.first_name, ' ', individuals.last_name), families.family_name FROM individuals
INNER JOIN families ON individuals.id = families.head_of_family_individual_id;