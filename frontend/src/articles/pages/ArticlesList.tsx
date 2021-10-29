import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../redux/rootReducer";
import RootState from "../../redux/rootState";
import ArticleDisplay from "../components/ArticleDisplay";

import articlesActions from "../redux/articlesActions";
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import { Articles } from '../../models/Articles';


interface ArticlesListProps { }
const ArticlesList: React.FC<ArticlesListProps> = () => {

  const dispatch = useDispatch();

  //@ts-ignore
  const { data } = useTypedSelector((state: RootState) => state.articles);
  useEffect(() => {
    dispatch(articlesActions.getArticles());
  }, [dispatch]);

  return (
    <Box>

      {data?.length
        ? (<>
          {data.map((article: Articles) => (
            <ArticleDisplay article={article} />
          ))}

        </>)
        : (<Typography>Now Loading</Typography>)
      }
    </Box>
  )
}
export default ArticlesList;