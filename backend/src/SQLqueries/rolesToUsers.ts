const connectionDB = require('../db-config')

const db = connectionDB.promise();

const addRoleToUserQuery = (values: any) => {
  return db.query(`INSERT INTO USER_HAS_ROLES SET ?`, [values]);
}
const removeRoleToUserQuery = (id: string) => {
  return db.query(`DELETE FROM USER_HAS_ROLES WHERE id=?`, [id]);
}
const removeRoleToUserByUseridQuery = (id: string) => {
  return db.query(`DELETE FROM USER_HAS_ROLES WHERE id_user=?`, [id]);
}
const getRolesForUserQuery = (idUser: string) => {
  return db.query(`SELECT r.name FROM USER_HAS_ROLES as uar INNER JOIN ROLES AS r ON uar.id_role = r.id WHERE id_user=?`, [idUser]);
}
const getUsersFromRoleQuery = (idRole: string) => {
  return db.query(`SELECT u.id FROM USER_HAS_ROLES as uar INNER JOIN USERS AS u ON uar.id_user = u.id WHERE id_role=?`, [idRole]);
}
const getIterationsForUserRolesQuery = () => {
  return db.query('SELECT * FROM USER_HAS_ROLES');
}

module.exports = { addRoleToUserQuery, removeRoleToUserQuery, removeRoleToUserByUseridQuery, getRolesForUserQuery, getUsersFromRoleQuery, getIterationsForUserRolesQuery }