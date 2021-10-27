import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Articles } from "../../models/Articles";
import { fetchApi } from "../../utils/axiosApi";
import ArticleDisplay from "./ArticleDisplay";

interface ArticlesListProps { }
const ArticlesList: React.FC<ArticlesListProps> = () => {

  const [articles, setArticles] = useState<Articles[]>();

  useEffect(() => {
    fetchApi("articles").then((result: any) => setArticles(result));
    if (articles)
    {
      console.log(articles);
    }
  }, [articles]);

  return (
    <Box>
      <Typography>Hello World</Typography>
      {
        articles && articles.map((article) =>
          <ArticleDisplay article={article} />
        )
      }

    </Box>
  );
}

export default ArticlesList;