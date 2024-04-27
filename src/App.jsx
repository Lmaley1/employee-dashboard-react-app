import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import Data from './data/data.js'
import MediaCard from './components/employeeCard.jsx';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

function App() {
 const [ShowOnLeave, setShowOnLeave] = useState(false);
console.log(ShowOnLeave);

const filteredData = ShowOnLeave ? Data.filter((employee) => employee.onLeave): Data;

const toggleOnLeave = (event) => { if(ShowOnLeave) {setShowOnLeave(false)} else setShowOnLeave(true)};

 return (
   <Container fixed>
    <Box>
    <Typography variant="h4" component="h1">
        Employee Dashboard 
      </Typography>
      </Box>
      <Stack spacing={2} direction="row" justifyContent="center"> 
      <Switch onChange={toggleOnLeave}/>
      </Stack>
   <MediaCard data={filteredData} />
   </Container>

 );
}

export default App