import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { Articles } from '../../models/Articles'


interface ArticleDisplayProps {
  article: Articles;
}

const ArticleDisplay: React.FC<ArticleDisplayProps> = (props) => {
  const { article } = props;

  useEffect(() => {

  }, [article.id_user])

  return (<Box display="flex" justifyContent="center">
    <Box padding="8px" margin="8x" display="flex" flexDirection="column" width="80%" borderRadius="25px" boxShadow="1px 1px 3px rgba(0,0,0,0.4)">
      {article && (
        <><Typography variant="h2">{article.title}</Typography>
          <Typography variant="h3">{article.subtitle}</Typography>
          <Typography variant="subtitle1">{article.date_of_write}</Typography>
          <Typography variant="body1">{article.content}</Typography>
        </>)}
    </Box>
  </Box>
  )
}

export default ArticleDisplay;