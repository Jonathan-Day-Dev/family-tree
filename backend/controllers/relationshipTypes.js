import {
    getAllRelTypes,
    getRelTypeById,
    createRelType,
    updateRelType,
    deleteRelType
} from '../models/relationshipTypesModel.js';

import {
    executeModelNoProps,
    executeModelWithId,
    executeModelWithData,
    executeModelWithBoth
} from '../utils/executeModel.js';

export const showRelTypes = (req, res) => executeModelNoProps(getAllRelTypes, res);
export const showRelTypeById = (req, res) => executeModelWithId(getRelTypeById, req, res);
export const createRelationshipType = (req, res) => executeModelWithData(createRelType, req, res);
export const updateRelationshipType = (req, res) => executeModelWithBoth(updateRelType, req, res);
export const deleteRelationshipType = (req, res) => executeModelWithId(deleteRelType, req, res);