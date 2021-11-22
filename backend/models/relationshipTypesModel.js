import executeSql from "../utils/executeSql.js";

const GET_ALL_REL_TYPES = "SELECT * FROM relationship_types";
const GET_REL_TYPE_BY_ID = "SELECT * FROM relationship_types WHERE id = ?";
const CREATE_REL_TYPE = "INSERT INTO relationship_types SET ?";
const UPDATE_REL_TYPE = "UPDATE relationship_types SET ? WHERE id = ?";
const DELETE_REL_TYPE = "DELETE FROM relationship_types WHERE id = ?";

export const getAllRelTypes = result => executeSql(GET_ALL_REL_TYPES, result);
export const getRelTypeById = (id, result) => executeSql(GET_REL_TYPE_BY_ID, result, id);
export const createRelType = (data, result) => executeSql(CREATE_REL_TYPE, result, data);
export const updateRelType = (data, id, result) => executeSql(UPDATE_REL_TYPE, result, {...data}, id);
export const deleteRelType = (id, result) => executeSql(DELETE_REL_TYPE, result, id);