import {
    getAllRelationships,
    getRelById,
    createRel,
    updateRel,
    deleteRel
} from '../models/relationshipsModel.js';

import {
    executeModelNoProps,
    executeModelWithId,
    executeModelWithData,
    executeModelWithBoth
} from '../utils/executeModel.js';

export const showRelationships = (req, res) => executeModelNoProps(getAllRelationships, res);
export const showRelById = (req, res) => executeModelWithId(getRelById, req, res);
export const addRel = (req, res) => executeModelWithData(createRel, req, res);
export const updateRelById = (req, res) => executeModelWithBoth(updateRel, req, res);
export const deleteRelById = (req, res) => executeModelWithId(deleteRel, req, res);