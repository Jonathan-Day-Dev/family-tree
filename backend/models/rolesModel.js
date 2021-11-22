import executeSql from "../utils/executeSql.js";

const GET_ALL_ROLES = "SELECT * FROM roles";
const GET_ROLE_BY_ID = "SELECT * FROM roles WHERE id = ?";
const CREATE_ROLE = "INSERT INTO roles SET ?";
const UPDATE_ROLE = "UPDATE roles SET ? WHERE id = ?";
const DELETE_ROLE = "DELETE FROM roles WHERE id = ?";

export const getAllRoles = result => executeSql(GET_ALL_ROLES, result);
export const getRoleById = (id, result) => executeSql(GET_ROLE_BY_ID, result, id);
export const createRole = (data, result) => executeSql(CREATE_ROLE, result, data);
export const updateRole = (data, id, result) => executeSql(UPDATE_ROLE, result, {...data}, id);
export const deleteRole = (id, result) => executeSql(DELETE_ROLE, result, id);