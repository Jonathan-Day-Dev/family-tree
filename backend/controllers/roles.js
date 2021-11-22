import {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
} from '../models/rolesModel.js';

import {
    executeModelNoProps,
    executeModelWithId,
    executeModelWithData,
    executeModelWithBoth
} from '../utils/executeModel.js';

export const showRoles = (req, res) => executeModelNoProps(getAllRoles, res);
export const showRoleById = (req, res) => executeModelWithId(getRoleById, req, res);
export const addRole = (req, res) => executeModelWithData(createRole, req, res);
export const updateRoleById = (req, res) => executeModelWithBoth(updateRole, req, res);
export const deleteRoleById = (req, res) => executeModelWithId(deleteRole, req, res);