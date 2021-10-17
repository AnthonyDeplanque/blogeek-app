import * as Joi from 'joi';
import * as express from "express";
import { Categories, SubCategories } from '../models/categories';
import { ServerDetails, ServerResponses } from '../config/serverResponses';
import { generatedId } from '../services/idGenerator';

const categoriesMiddlewares = require('../middlewares/categories');
const categoriesQueries = require('../SQLqueries/categories');

const getCategories = (req: express.Request, res: express.Response) => {
  categoriesQueries.getCategoriesQuery().then(([results]: any[]) => {
    const categories = results.map(async (cat: Categories, index: number) => {
      const subCat = await categoriesQueries.getSubCategoriesFromIdCategoryQuery(cat.id).then(([results]: any[]) => {
        const subCategories: string[] = results.map((sub: SubCategories) => sub.title);
        return subCategories;
      })
      cat.sub_categories = subCat;
      return cat;
    })
    Promise.all(categories).then((result) => {
      res.status(200).json(result)
    }
    )
  })
    .catch((error: unknown) => {

      res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING });
    })
}

const getOneCategory = (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  const promise = categoriesQueries.getOneCategoryQuery(id).then(async ([[result]]: [[Categories]]) => {
    const category: Categories = result;
    await categoriesQueries.getSubCategoriesFromIdCategoryQuery(id).then(([results]: any) => {
      const subCategories: string[] = results.map((sub: SubCategories) => sub.title);
      return subCategories;
    }).then((results: SubCategories[]) => { category.sub_categories = results })
    return category;
  })
  Promise.resolve(promise)
    .then((value: any) => res.status(200).json(value))
    .catch((error: unknown) => {
      console.error(error)
      res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING })
    })
}

const getSubCategories = (req: express.Request, res: express.Response) => {
  console.log("getSubCategories");
  categoriesQueries.getSubCategoriesQuery().then(([results]: any) => {
    res.status(200).json(results);
  })
    .catch((error: unknown) => {
      console.log(error);
      res.status(500).json({
        message: ServerResponses.SERVER_ERROR,
        detail: ServerDetails.ERROR_RETRIEVING
      })
    })
}

const getOneSubCategory = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  categoriesQueries.getOneSubCategoryQuery(id).then(([results]: any) => {
    if (results.length)
    {
      res.status(200).json(results[0]);
    }
    else res.status(404).json({
      message: ServerResponses.NOT_FOUND,
      deteil: ServerDetails.NO_DATA
    })
  })
    .catch((error: unknown) => {
      res.status(500).json({
        message: ServerResponses.SERVER_ERROR,
        detail: ServerDetails.ERROR_RETRIEVING
      })
    })
}

const postCategory = (req: express.Request, res: express.Response) => {
  const { title } = req.body;
  const id = generatedId();
  const { error } = Joi.object(categoriesMiddlewares.postCategoryValidationObject).validate({ id, title }, { abortEarly: false });
  if (error)
  {
    console.error(error);
    res.status(422).json({ validationError: error.details });
  } else
  {
    categoriesQueries.getOneCategoryByTitle(title).then(([result]: any[]) => {
      if (result.length)
      {
        res.status(409).json({ message: ServerResponses.CONFLICT, detail: ServerDetails.ALREADY_EXIST });
      } else
      {
        categoriesQueries.postOneCategoryQuery({ id, title }).then(([result]: any) => {
          res.status(201).json({ ...result, response: { message: ServerResponses.REQUEST_OK, detail: ServerDetails.CREATION_OK } })
        }).catch((error: unknown) => {
          console.error(error);
          res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING })
        });
      }

    }).catch((error: unknown) => {
      console.error(error);
      res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING })
    })

  }
}

const postSubCategory = (req: express.Request, res: express.Response) => {
  const { title, id_category } = req.body;
  const id = generatedId();
  const { error } = Joi.object(categoriesMiddlewares.postSubCategoryValidationObject).validate({ id, id_category, title }, { abortEarly: false });
  if (error)
  {
    console.error(error);
    res.status(422).json({ validationError: error.details });
  } else
  {
    categoriesQueries.getOneSubCategoryByTitle(title).then(([result]: any[]) => {
      if (result.length)
      {
        res.status(409).json({ message: ServerResponses.CONFLICT, detail: ServerDetails.ALREADY_EXIST });
      } else
      {
        categoriesQueries.postOneSubCategoryQuery({ id, id_category, title }).then(([result]: any) => {
          res.status(201).json({ ...result, response: { message: ServerResponses.REQUEST_OK, detail: ServerDetails.CREATION_OK } })
        }).catch((error: unknown) => {
          console.error(error);
          res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING })
        });
      }

    }).catch((error: unknown) => {
      console.error(error);
      res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING })
    })

  }
}

const updateCategory = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
}

const updateSubCategory = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
}

const deleteCategory = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
}

const deleteSubCategory = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
}

module.exports = { getCategories, getOneCategory, getSubCategories, getOneSubCategory, postCategory, updateCategory, deleteCategory, postSubCategory, updateSubCategory, deleteSubCategory };

