import * as Joi from 'joi';
import * as express from "express";
import { ServerDetails, ServerResponses } from '../config/serverResponses';
import { generatedId } from '../services/idGenerator';
import { Articles } from '../models/Articles';

const articlesQueries = require('../SQLqueries/articles');
const articlesMiddlewares = require("../middlewares/articles");

const getAllArticles = (req: express.Request, res: express.Response) => {
  const { first, last, title, user } = req.params;

  if (first && last && !title && !user)
  {
    articlesQueries.getSelectedArticlesQuery(+first, +last).then(([results]: [Articles][]) => {
      res.status(200).json(results)
    }).catch((error: unknown) => {
      console.error(error);
      res.status(500).json({
        message: ServerResponses.SERVER_ERROR,
        detail: ServerDetails.ERROR_RETRIEVING
      })
    })
  }
  else if (title && !first && !last && !user)
  {
    articlesQueries.getOneArticleByTitleQuery(title).then(([[result]]: [[Articles]]) => {
      if (result)
      {
        res.status(200).json(result)
      } else
      {
        res.status(404).json({
          message: ServerResponses.NOT_FOUND,
          ServerDetails: ServerDetails.NO_DATA
        })
      }
    }).catch((error: unknown) => {
      console.error(error);
      res.status(500).json({
        message: ServerResponses.SERVER_ERROR,
        detail: ServerDetails.ERROR_RETRIEVING
      })
    })
  }
  else if (user && !first && !last && !title)
  {
    articlesQueries.getAllArticlesFromAnUserQuery(user).then(([results]: [Articles][]) => {
      if (results.length)
      {
        res.status(200).json(results)
      } else
      {
        res.status(404).json({
          message: ServerResponses.NOT_FOUND,
          ServerDetails: ServerDetails.NO_DATA
        })
      }
    })
      .catch((error: unknown) => {
        console.error(error);
        res.status(500).json({
          message: ServerResponses.SERVER_ERROR,
          detail: ServerDetails.ERROR_RETRIEVING
        })
      })
  }
  else if (!user && !first && !last && !title)
  {
    articlesQueries.getArticlesQuery().then(([results]: [Articles][]) => {
      res.status(200).json(results)
    })
      .catch((error: unknown) => {
        console.error(error);
        res.status(500).json({
          message: ServerResponses.SERVER_ERROR,
          detail: ServerDetails.ERROR_RETRIEVING
        })
      })
  } else
  {
    res.status(500).json({
      message: ServerResponses.BAD_REQUEST,
      detail: ServerDetails.ERROR_RETRIEVING
    })
  }
}

module.exports = { getAllArticles };