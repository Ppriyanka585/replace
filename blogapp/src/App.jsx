import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Addblog from './pages/Addblog';
import Nav1 from './units/Nav1'


export default function App() {

  return (
    <>
    <Nav1></Nav1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<Addblog />} />

        
      </Routes>
    </>

  )
}