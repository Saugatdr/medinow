import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import Collapseable from './components/Collapseable.jsx';
import Navigation from './components/Navigation.jsx';
import Records from './components/Records.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navigation/>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dash" element={<Collapseable/>}/>
      <Route path="/records" element={<Records/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)


