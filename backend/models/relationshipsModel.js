import executeSql from "../utils/executeSql.js";

const GET_ALL_RELATIONSHIPS = "SELECT * FROM relationships";
const GET_REL_BY_ID = "SELECT * FROM relationships WHERE id = ?";
const CREATE_REL = "INSERT INTO relationships SET ?";
const UPDATE_REL = "UPDATE relationships SET ? WHERE id = ?";
const DELETE_REL = "DELETE FROM relationships WHERE id = ?";

export const getAllRelationships = result => executeSql(GET_ALL_RELATIONSHIPS, result);
export const getRelById = (id, result) => executeSql(GET_REL_BY_ID, result, id);
export const createRel = (data, result) => executeSql(CREATE_REL, result, data);
export const updateRel = (data, id, result) => executeSql(UPDATE_REL, result, {...data}, id);
export const deleteRel = (id, result) => executeSql(DELETE_REL, result, id);