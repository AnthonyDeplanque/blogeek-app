import { Users } from "../models/Users";

const db = connection.promise();

const addUserQuery = (values: Users) => {
  return db.query(`INSERT INTO USERS SET ? `, [values]);
}
const getAllUsersQuery = () => {
  return db.query("SELECT * FROM USERS")
}

module.exports = {
  addUserQuery,
  getAllUsersQuery
}