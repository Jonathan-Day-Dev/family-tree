import {
    getAllInds,
    getIndById,
    createInd,
    updateInd,
    deleteInd
} from '../models/individualsModel.js';

import {
    executeModelNoProps,
    executeModelWithId,
    executeModelWithData,
    executeModelWithBoth
} from '../utils/executeModel.js';

export const showIndividuals = (req, res) => executeModelNoProps(getAllInds, res);
export const showIndividualById = (req, res) => executeModelWithId(getIndById, req, res);
export const createIndividual = (req, res) => executeModelWithData(createInd, req, res);
export const updateIndividual = (req, res) => executeModelWithBoth(updateInd, req, res);
export const deleteIndividual = (req, res) => executeModelWithId(deleteInd, req, res);