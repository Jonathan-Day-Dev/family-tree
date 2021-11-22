import executeSql from '../utils/executeSql.js';

const GET_ALL_FAMILIES = "SELECT * FROM families";
const GET_FAMILY_BY_ID = "SELECT * FROM families WHERE id = ?";
const CREATE_FAMILY = "INSERT INTO families SET ?";
const UPDATE_FAMILY = "UPDATE families SET ?";
const DELETE_FAMILY = "DELETE FROM families WHERE id = ?";

export const getAllFamilies = result => executeSql(GET_ALL_FAMILIES, result);
export const getFamilyById = (id, result) => executeSql(GET_FAMILY_BY_ID, result, id);
export const createFamily = (data, result) => executeSql(CREATE_FAMILY, result, data);
export const updateFamily = (data, id, result) => executeSql(UPDATE_FAMILY, result, {...data}, id);
export const deleteFamily = (id, result) => executeSql(DELETE_FAMILY, result, id);