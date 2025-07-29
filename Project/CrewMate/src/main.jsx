import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route, Routes} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Layout from '../Routes/Layout.jsx'
import Create from '../pages/Create.jsx'
import Read from '../pages/Read.jsx'
import NotFound from '../pages/NotFound.jsx'
import Edit from '../pages/Edit.jsx'
import View from '../pages/View.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="Create" element = {<Create/>}/>
          <Route path="Gallery" element={<Read/>}/>
          <Route path="Edit/:id" element={<Edit/>}/>
          <Route path="View/:id" element={<View/>}/>
          <Route path="*" element={ <NotFound /> } />
         
        </Route>
       
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
