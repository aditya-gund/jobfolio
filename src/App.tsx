import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Slider, RangeSlider, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 const theme = createTheme(
  {
    colors:{
      'bright-sun': ['#fffbeb','#fff3c6','#ffe588','#ffd149','#ffbd20','#f99b07','#dd7302','#b75006','#943c0c','#7a330d','#461902',
      ],
      'iron': ['#f7f7f7','#ededed','#dfdfdf','#cdcdcd','#adadad','#999999','#888888','#7b7b7b','#676767','#545454','#363636',
      ],
    }
  }
 )
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
  </MantineProvider>
  
  );
}

export default App;
