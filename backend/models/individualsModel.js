import executeSql from '../utils/executeSql.js';

const GET_ALL_INDS = "SELECT * FROM individuals";
const GET_IND_BY_ID = "SELECT * FROM individuals WHERE id = ?";
const CREATE_IND = "INSERT INTO individuals SET ?";
const UPDATE_IND = "UPDATE individuals SET ? WHERE id = ?";
const DELETE_IND = "DELETE FROM individuals WHERE id = ?";

export const getAllInds = result => executeSql(GET_ALL_INDS, result);
export const getIndById = (id, result) => executeSql(GET_IND_BY_ID, result, id);
export const createInd = (data, result) => executeSql(CREATE_IND, result, data);
export const updateInd = (data, id, result) => executeSql(UPDATE_IND, result, {...data}, id);
export const deleteInd = (id, result) => executeSql(DELETE_IND, result, id);