import * as mysql2 from 'mysql2';
import { Articles } from '../models/Articles';

const connection = require('../db-config');
const db: mysql2.Connection = connection.promise();

const getArticlesQuery = () => {
  return db.query('SELECT * FROM ARTICLES ORDER BY date_of_write');
}

const getOneArticleQuery = (id: string) => {
  return db.query('SELECT * FROM ARTICLES WHERE id = ? ', [id]);
}

const getAllArticlesFromAnUserQuery = (id: string) => {
  return db.query('SELECT * FROM ARTICLES WHERE id_user = ?', [id]);
}

const getAllArticlesFromACategoryQuery = (id: string) => {
  return db.query(`
    SELECT a.id, a.title, a.id_user, a.subtitle, a.content, a.date_of_write
    FROM ARTICLES_HAS_CATEGORIES AS ahc
    INNER JOIN ARTICLES ON ahc.id_article = a.id
    WHERE ahc.id_subcategory = ?`, [id]);
}

const postArticleQuery = (values: Articles) => {
  return db.query('INSERT INTO ARTICLES SET ?', [values]);
}

const postCategoryForArticleQuery = (values: any) => {
  return db.query('INSERT INTO ARTICLE_HAS_CATEGORIES SET ?', [values]);
}

const updateArticleQuery = (id: string, values: Articles) => {
  return db.query('UPDATE ARTICLES SET ? WHERE id=?', [values, id]);
}

const deleteArticleQuery = (id: string) => {
  return db.query('DELETE FROM ARTICLE WHERE id = ?', [id]);
}

const deleteCategoryForArticleQuery = (id: string) => {
  return db.query('DELETE FROM ARTICLE_HAS_CATEGORIES WHERE id_article = ?', [id])
}

module.exports = {
  getAllArticlesFromACategoryQuery,
  getAllArticlesFromAnUserQuery,
  getArticlesQuery,
  getOneArticleQuery,
  postArticleQuery,
  postCategoryForArticleQuery,
  updateArticleQuery,
  deleteArticleQuery,
  deleteCategoryForArticleQuery
}