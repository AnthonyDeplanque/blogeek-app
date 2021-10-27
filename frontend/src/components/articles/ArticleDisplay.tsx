import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import { Articles } from '../../models/Articles'
import { Users } from '../../models/Users';
import { fetchApi } from '../../utils/axiosApi';

interface ArticleDisplayProps {
  article: Articles;
}

const ArticleDisplay: React.FC<ArticleDisplayProps> = (props) => {
  const { article } = props;
  const [creator, setCreator] = useState<Users | null>();

  useEffect(() => {
    fetchApi(`users/${article.id_user}`).then(res => { setCreator(res) })
  }, [article.id_user])

  return (<Box display="flex" justifyContent="center">
    <Box padding="8px" margin="8x" display="flex" flexDirection="column" width="80%" borderRadius="25px" boxShadow="1px 1px 3px rgba(0,0,0,0.4)">
      <Typography variant="h2">{article.title}</Typography>
      <Typography variant="h3">{article.subtitle}</Typography>
      <Typography variant="subtitle1">{article.date_of_write}</Typography>
      <Typography variant="body1">{article.content}</Typography>
      {creator && <Typography variant="h4">{creator.nick_name}</Typography>}
    </Box>
  </Box>
  )
}

export default ArticleDisplay;