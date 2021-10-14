import jwt from "express-jwt";

const JWT = require('jsonwebtoken');
const expressJWT = require("express-jwt");

const createToken = (payload: string) => {
  const dateNowForToken = Date.now() / 1000;
  const expiration = Math.floor(dateNowForToken + 60 * 60 * 24);
  const token = JWT.sign(
    {
      data: payload,
      exp: expiration
    },
    process.env.JWT_KEY
  );
  return token;
}

const decodeToken = (token: any) => {
  return JWT.decode(token);
}

const authWithJWT = expressJWT({
  secret: process.env.JWT_KEY,
  algorithms: ["HS256"]
});

module.exports = { createToken, decodeToken, authWithJWT };