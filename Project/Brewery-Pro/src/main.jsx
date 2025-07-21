import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route, Routes} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Layout from './routes/Layout.jsx'
import NotFound from './routes/NotFound.jsx'
import DetailInfo from './routes/DetailInfo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="BrewDetail/:id" element={<DetailInfo/>}/>
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
