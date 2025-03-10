import { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
      </Container>
    </>
  )
}

export default App
