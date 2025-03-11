import { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// 쇼핑 항목을 표시하는 목록 관련 Component들을 import
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import './App.css'

import AddItem from './components/AddItem';

export type Item = {
  product: string;
  amount: string;
}

function App() {

  const [ items, setItems ] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([item, ...items]);
  }
  
  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h6">
              장바구니
            </Typography>
          </Toolbar>
        </AppBar>
        <AddItem addItem={addItem} />

        <List>
          {
            items.map((item, index) => 
              <ListItem key={index} divider>
                <ListItemText
                  primary={item.product}
                  secondary={item.amount}/>
              </ListItem>
            )
          }  
        </List>  

      </Container>
    </>
  )
}

export default App
