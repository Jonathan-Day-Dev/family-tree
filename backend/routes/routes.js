import express from 'express';
import {
    showIndividuals,
    showIndividualById,
    createIndividual,
    updateIndividual,
    deleteIndividual
} from '../controllers/individuals.js';
import {
    showFamilies,
    showFamilyById,
    addFamily,
    updateFamilyById,
    deleteFamilyById
} from '../controllers/families.js';
import {
    showRelTypes,
    showRelTypeById,
    createRelationshipType,
    updateRelationshipType,
    deleteRelationshipType
} from '../controllers/relationshipTypes.js';
import {
    showRoles,
    showRoleById,
    addRole,
    updateRoleById,
    deleteRoleById
} from '../controllers/roles.js';
import {
    showRelationships,
    showRelById,
    addRel,
    updateRelById,
    deleteRelById
} from '../controllers/relationships.js';

const router = express.Router();

/**
 * INDIVIDUALS TABLE CRUD
 */
router.get('/individuals', showIndividuals);
router.get('/individual/:id', showIndividualById);
router.post('/individual', createIndividual);
router.put('/individual/:id', updateIndividual);
router.delete('/individual/:id', deleteIndividual);

/**
 * FAMILIES TABLE CRUD
 */
router.get('/families', showFamilies);
router.get('/family/:id', showFamilyById);
router.post('/family', addFamily);
router.put('/family/:id', updateFamilyById);
router.delete('/family/:id', deleteFamilyById);

/**
 * RELATIONSHIP TYPE TABLE CRUD
 */
router.get('/rel-types', showRelTypes);
router.get('/rel-type/:id', showRelTypeById);
router.post('/rel-type', createRelationshipType);
router.put('/rel-type/:id', updateRelationshipType);
router.delete('/rel-type/:id', deleteRelationshipType);

/**
 * ROLES TABLE CRUD
 */
router.get('/roles', showRoles);
router.get('/role/:id', showRoleById);
router.post('/role', addRole);
router.put('/role/:id', updateRoleById);
router.delete('/role/:id', deleteRoleById);

/**
 * RELATIONSHIPS TABLE CRUD
 */
router.get('/relationships', showRelationships);
router.get('/relationship/:id', showRelById);
router.post('/relationship', addRel);
router.put('/relationship/:id', updateRelById);
router.delete('/relationship/:id', deleteRelById);

export default router;