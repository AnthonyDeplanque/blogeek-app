import { Users } from "../models/Users";
const connectionDB = require('../db-config')

const db = connectionDB.promise();

const addUserQuery = (values: Users) => {
  return db.query(`INSERT INTO USERS SET ? `, [values]);
}

const getUsersQuery = () => {
  return db.query(`SELECT * FROM USERS ORDER BY inscription_time`);
}

const getOneUserQueryById = (value: string) => {
  return db.query(`SELECT * FROM USERS WHERE id = ?`, [value]);
}

const getOneUserQueryByNickname = (value: string) => {
  return db.query(`SELECT * FROM USERS WHERE nick_name = ?`, [value]);
}

const getOneUserQueryByEmail = (value: string) => {
  return db.query(`SELECT * FROM USERS WHERE email = ?`, [value]);
}

const getHashedPasswordByEmail = (value: string) => {
  return db.query(`SELECT hashed_password FROM USERS WHERE email = ?`, [value]);
}
const getHashedPasswordByNickname = (value: string) => {
  return db.query(`SELECT hashed_password FROM USERS WHERE nick_name = ?`, [value]);
}

const getSelectedUsersQuery = (first: number, last: number) => {
  return db.query(`SELECT * FROM USERS LIMIT ?, ?`, [first, last]);
}

const updateUserQuery = (id: string, values: any) => {
  return db.query(`UPDATE USERS SET ? WHERE id = ?`, [values, id]);
}

const deleteUserQuery = (id: string) => {
  return db.query(`DELETE FROM USERS WHERE ID = ?`, [id]);
}

module.exports = {
  addUserQuery,
  getUsersQuery,
  getOneUserQueryById,
  getOneUserQueryByEmail,
  getOneUserQueryByNickname,
  getHashedPasswordByEmail,
  getHashedPasswordByNickname,
  getSelectedUsersQuery,
  updateUserQuery,
  deleteUserQuery,
}