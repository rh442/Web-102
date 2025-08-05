import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Create from './Pages/Create.jsx'
import Gallery from './Pages/Gallery.jsx'
import Details from './Pages/Details.jsx'
import Edit from './Pages/Edit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<Layout/>}>
                <Route index element={<Gallery/>}/> 
                <Route path="Create" element={<Create/>}/>
                <Route path="Details/:id" element={<Details/>}/>           
                <Route path="Edit/:id" element={<Edit/>}/>
            </Route>
        </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
