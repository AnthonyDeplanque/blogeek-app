const connectionDB = require('../db-config')

const db = connectionDB.promise();

const addRoleToUserQuery = (values: any) => {
  return db.query(`INSERT INTO USER_HAS_ROLES SET ?`, [values]);
}
const removeRoleToUserQuery = (id: string) => {
  return db.query(`DELETE FROM USER_HAS_ROLES WHERE id=?`, [id]);
}
const getRolesForUserQuery = (idUser: string) => {
  return db.query(`SELECT r.name FROM USER_HAS_ROLES INNER JOIN ROLES AS r WHERE id_user=?`, [idUser]);
}
const getUsersFromRoleQuery = (idRole: string) => {
  return db.query(`SELECT u.id FROM USER_HAS_ROLES INNER JOIN USERS AS u WHERE id_role=?`, [idRole]);
}
const getIterationsForUserRolesQuery = () => {
  return db.query('SELECT * FROM USER_HAS_ROLES');
}

module.exports = { addRoleToUserQuery, removeRoleToUserQuery, getRolesForUserQuery, getUsersFromRoleQuery, getIterationsForUserRolesQuery }