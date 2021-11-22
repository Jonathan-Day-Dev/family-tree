import {
    getAllFamilies,
    getFamilyById,
    createFamily,
    updateFamily,
    deleteFamily
} from '../models/familiesModel.js';

import {
    executeModelNoProps,
    executeModelWithId,
    executeModelWithData,
    executeModelWithBoth
} from '../utils/executeModel.js';

export const showFamilies = (req, res) => executeModelNoProps(getAllFamilies, res);
export const showFamilyById = (req, res) => executeModelWithId(getFamilyById, req, res);
export const addFamily = (req, res) => executeModelWithData(createFamily, req, res);
export const updateFamilyById = (req, res) => executeModelWithBoth(updateFamily, req, res);
export const deleteFamilyById = (req, res) => executeModelWithId(deleteFamily, req, res);