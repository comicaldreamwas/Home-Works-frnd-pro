

import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const Resume = () => {
  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Привіт! Я Антон Чевжик
      </Typography>
      <Typography variant="body1" paragraph>
        Мені 23 роки. Люблю спорт і програмування. Хочу стати фронтенд розробником. Завжди йду до цілі, готовий багато працювати. Мені хочеться завжди дізнаватися щось нове.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Навички
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="HTML/CSS" />
        </ListItem>
        <ListItem>
          <ListItemText primary="JavaScript (ES6+)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="React" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Redux" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Redux-Saga" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Git" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Resume;
