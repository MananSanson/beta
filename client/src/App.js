
//components
import Header from './component/header/header';
import Home from './component/header/home/home';
import DataProvider from './context/DataProvider';
import DetailView from './component/details/detailView';

import {Box} from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <DataProvider>
        <BrowserRouter>
          <Header/>
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<DetailView/>}  />
            </Routes>
          </Box>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
