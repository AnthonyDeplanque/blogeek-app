import { Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import MainCard from '../../common/components/MainCard';
import { formatDate } from '../../common/services/formatDate';
import { Articles } from '../../models/Articles'


interface ArticleSummaryProps {
  article: Articles;
}

const ArticleSummary: React.FC<ArticleSummaryProps> = (props) => {
  const { article } = props;
  const theme = useTheme();
  const history = useHistory();
  useEffect(() => {

  }, [])

  const handleShowFullArticle = (id: string) => {
    history.push(`articles/${id}`);
  }

  return (<MainCard title={article.title}>

    <Box >
      {article && (
        <Box display="flex" flexDirection="column">
          <Typography variant="h3">{article.subtitle}</Typography>
          <Box padding={theme.spacing(1)} display="flex" flexDirection="row" justifyContent="space-between" ><Typography variant="subtitle1">{formatDate(article.date_of_write)}</Typography> <Typography> par {article.creator?.nick_name}</Typography></Box>
          <Box padding={theme.spacing(1)}><Typography variant="body1" style={{ textOverflow: "ellipsis", wordWrap: "break-word", overflow: "hidden", height: "10rem" }}>{article.content}</Typography></Box>
          <Box padding={theme.spacing(1)} display="flex" flexDirection="row" justifyContent="space-between" ><Button variant='contained' onClick={() => handleShowFullArticle(article.id)}>Voir la suite</Button></Box>
        </Box>)}
    </Box >
  </MainCard>
  )
}

export default ArticleSummary;