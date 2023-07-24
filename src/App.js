import React from 'react';
import Card from './Components/Card/Card';
import Heading from './Components/Headings/Heading';
import Navigation from './Components/Navigation/Navigation';
import Navigate from './Components/Navigate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './Components/Services';



function App() {
  return (
    
   <>
   <Navigation></Navigation>
   <Routes>
        <Route path="/" element={<Services />}>
          <Route index element={<Services />}  exact/>
        </Route>
        <Route path="blogs" element={<Navigate />} />
    </Routes>
   </>
  


    
   
  )
}

export default App;
