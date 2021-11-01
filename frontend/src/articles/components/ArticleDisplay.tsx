import { Typography } from '@material-ui/core';
import { Box, useTheme } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import MainCard from '../../common/components/MainCard';
import { formatDate } from '../../common/services/formatDate';
import { Articles } from '../../models/Articles'


interface ArticleDisplayProps {
  article: Articles;
}

const ArticleDisplay: React.FC<ArticleDisplayProps> = (props) => {
  const { article } = props;
  const theme = useTheme();
  useEffect(() => {

  }, [article.id_user])

  return (<MainCard title={article.title}>

    <Box >
      {article && (
        <Box display="flex" flexDirection="column">
          <Typography variant="h3">{article.subtitle}</Typography>
          <Typography variant="subtitle1">{formatDate(article.date_of_write)}</Typography>
          <Typography variant="body1">{article.content}</Typography>
        </Box>)}
    </Box >
  </MainCard>
  )
}

export default ArticleDisplay;